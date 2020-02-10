1. Number to Month Name
Schreib eine Funktion die eine Zahl nimmt (von 1 bis 12) und den dazu gehörenden Monat als String ausgibt. z.B. Wenn 3 der Input ist, soll "März" zurückkommen.
Beispiele:

monthName(3) ➞ "März"

monthName(12) ➞ "Dezember"

monthName(6) ➞ "Juni"

2. Unlucky 13
Schreibe eine Funktion, die alle zahlen in einem Array zurückgibt die nicht durch 13 teilbar sind. 

Beispiele:

unlucky13([53, 182, 435, 591, 637]) ➞ [53, 435, 591] // 182 und 637 sind durch 13 teilbar
unlucky13([24, 316, 393, 458, 1279]) ➞ [24, 316, 393, 458, 1279] // keine zahlen in dem arraysind durch 13 teilbar
unlucky13([104, 351, 455, 806, 871]) ➞ [] // alle zahlen in dem array sind durch 13 teilbar

3. Filter out Strings from an Array
Schreibe eine Funktion die Strings aus Arrays filtert und nur Integer Zahlen zurückgibt.

Beispiele:

filterList([1, 2, 3, "x", "y", 10]) ➞ [1, 2, 3, 10]

filterList([1, "a", 2, "b", 3, "c"]) ➞ [1, 2, 3]

filterList([0, -32, "&@A", 64, "99", -128]) ➞ [0, -32, 64, -128]

4. Unterschied zwischen max und min zahlen in einem array
Schreibe eine Funktion, die einen Array animmt und die Differenz zwischen der größten und der kleinsten Zahl zurückgibt. 

Beispiele:

diffMaxMin([10, 4, 1, 4, -10, -50, 32, 21]) ➞ 82 // Kleinste Zahl ist -50, größte ist 32.

diffMaxMin([44, 32, 86, 19]) ➞ 67 // Kleinste Zahl ist 19, größte ist 86.
