# Query Functions
Query functions can be used in `where`, `first`, `orderByAscending`, `orderByDescending`.
[How to read, filter and order data](read-filter-order.md)

If you are missing a function, please open an issue!

## Date Functions
```
column.isAfter(date) // checks if the column is after the date parameter
column.isBefore(date) // checks if the column is before the date parameter

column.isToday() // checks if the column is today (current date). this uses the postgres servers time (might diverge form your node processes time/timezone)
```

## String Operators
```
column.startsWith(string) // checks if the column starts with the string parameter
column.startOf(string) // checks if the string parameters starts with the columns value

column.endsWith(string) // checks if the column ends with the string parameter
column.endOf(string) // checks if the string parameters ends with the columns value

column.includes(string) // checks if the column includes the string parameter
column.substringOf(string) // checks if the string parameter includes the columns value

column.uppercase(): QueryString // converts the string to upper case (ABC)
column.lowercase(): QueryString // converts the string to lower case (abc)
```

## Chaining
Functions with a query type return value (eg. `QueryString`, ...) can be chained
```
await this.books
    .where(book => book.title.lowercase().includes("test"))
    .orderByAscending(book => book.author.firstname.lowercase())
    .toArray()
```