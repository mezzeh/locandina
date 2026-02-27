//somma -k se esiste un i j per cui i+j = k
let array = [1, 2, 3, 4, 5, 6]
let k = 8
for (let i = 0; i < array.length - 1;i++) // non credo di dover cofrontare l'ultimo con se stesso.
{
  for (let j = i + 1; j < array.length; j++)
  {
    if (array[i] + array[j] == k)
      console.log(true)
    }
  }
