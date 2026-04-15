class EmptyHistoryError extends Error
{
  constructor(message:string)
  {
    super(message);
  }
  }
type operation<T> = (x: T) => T;
interface operazione<T>  {
  apply: operation<T>
  undo: operation<T>
  description: string |undefined
};
class undoableHistory<T>
{
  private initialValue: T;
  protected operazioni : operazione<T> []
  constructor(value: T)
  {
    this.initialValue = value;
    this.operazioni = []
  }
  add(apply_fn:operation<T>, undo_fn:operation<T>, descriptio:string|undefined) // se aggiungo un type seingolo posso tipare
  {
    this.operazioni.push({
        apply: apply_fn,
        undo: undo_fn,
        description:descriptio}
    )
  }
  current_value():T
  {
    let val = this.initialValue;
    for (let el of this.operazioni)
    {
      val = el.apply(val)
    }
    return val
  }
  undoLast():T
  {
    if (this.operazioni.length == 0)
      throw new EmptyHistoryError("vuoto")
    let lastOp :operazione<T> = this.operazioni[this.operazioni.length - 1]!
    return lastOp.undo(this.current_value())
  }
}
function replay<T>(initial_value:T, operations:operazione<T>[]):T
{
  {
    let val:T = initial_value;
    for (let el of operations)
    {
      val = el.apply(val)
    }
    return val
  }
}
