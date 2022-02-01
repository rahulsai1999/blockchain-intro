# Lottery Contract

## Idea

- Contains a prize pool of a specific amount of ether.
- Contains a list of participants entering into the pool for the consideration of winning (they send in a small amount of money).
- When the prize pool (or) the number of people crosses a target, a third party (the manager) can ask the contract to select a winner.
- Self repeating contract which can reset itself after disbursing the amount.

## Design requirements

- Variables

  - **managers:** address of person who created the contract
  - **players:** array of addresses of people who entered into the lottery

- Functions
  - **enter**: to enter the lottery by sending an amount
  - **pickWinner**: to pick a winner and send the entire amount to the winner

# Implementation

## Solidity - Basic Types

- `string`
- `bool`
- `int` (integer)
- `uint` (integer positive)
- `fixed` (floating point)
- `ufixed` (floating point positive)
- `address` (special type which has methods tied to it)

## `msg` - Global Object

- `data`: data field from the call or transaction that invoked the current function
- `gas`: amount of gas the current function invocation has available
- `sender`: address of the account that started the current function invocation
- `value`: amount of ether (in wei) that was sent along with function invocation

## Solidity - Reference Types

- fixed array `int[3]`
- dynamic array `int[] -> [1,2,3]`
- mapping `mapping(int=>bool)`
- struct `struct Car {string make; string model;}`

**Note:**

- When requesting values from the contract's default getter function, it is only possible to get each index one by one, not the complete array at once. To get the complete array, define a separate getter function which returns the complete array.
- Two Dimensional arrays are allowed in Solidity, but they are not supported by ABI and Web3 world.
- Strings are dynamic 1-D arrays in solidity, which means array of strings are not supported when transferring from the contract to the application.

## Solidity - Validation and Modifiers

- `require()` can be used to invalidate a whole function on the basis of a boolean condition
- You can add these conditions to function modifiers in order to keep code DRY.
- Modifiers are small function templates which can be used to save some repetition in the code.
