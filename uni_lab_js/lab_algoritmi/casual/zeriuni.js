n = a.length
i = -1

for (let j = 0; j < n; j++)
{
  if (a[j] == 0)
  {
    i++
    let temp = a[i]
    a[i] = a[j]
    a[j] = temp
    }
  }
