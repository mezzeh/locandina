console.log(fibric(5))
function fibric(n)
{
  let F = [];
  for (let i = 0; i <= n; i++)
  {
    F[i] = -1;

    }
  return [fib(n,F),F]
}
function fib(n,F)
{

  if (n == 0 || n == 1)
  {
    F[n] = n
    return n
    }
  if (F[n] != -1) return F[n] // perche non funziona? perche entra qua fa il confronto ed esce, non fa la ricorsione.
  else
  {
    F[n] = fib(n - 1, F) + fib(n - 2, F)

    return F[n]
    }

}
console.log(fibBU(5))
function fibBU(n)
{
  let FI = []
  FI[0] = 0;
  FI[1] = 1;
  for (let i = 2; i <= n; i++)
  {
    FI[i] = FI[i-1] + FI[i-2]
    }
  return FI
}
