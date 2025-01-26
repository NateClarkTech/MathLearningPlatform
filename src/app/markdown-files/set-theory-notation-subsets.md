# Understanding Subsets

## Definition of a Subset
A subset is a set in which all the elements are also elements of another set. 

Formally, a set $A$ is a subset of a set $B$ if and only if every element of $A$ is also an element of $B$. This is written as:

$ A \subset B $

If $A$ is a subset of $B$ but $A \neq B$, $A$ is called a proper subset of $B$, denoted as:

$ A \subset B $

The symbol $\subseteq$ means set $A$ is a subset or equal to set $B$

So the following statements are true:   

$\lbrace 1, 2, 3, 4 \rbrace \subseteq \lbrace 1, 2, 3, 4 \rbrace$

$\lbrace 1, 2, 4 \rbrace \subseteq \lbrace 1, 2, 3, 4 \rbrace$

But this following statement is false

$\lbrace 1, 2, 3, 4 \rbrace \subset \lbrace 1, 2, 3, 4 \rbrace$

A set is said to be equal when both $A \subseteq B$ and $B \subseteq A$ are true for some set A and B

## Examples of Subsets

### Numeric Examples
1. Let $A = \lbrace 1, 2\rbrace$ and $B = \lbrace 1, 2, 3 \rbrace $. Here, $A \subseteq B$ because every element of $A$ is in $B$.
2. $A = \lbrace 3, 5, 7\rbrace $, $B = \lbrace 3, 5, 7, 9, 11\rbrace$. $A \subseteq B$.

### Non-Numeric Examples
1. Let $A = \lbrace \text{apple}, \text{banana} \rbrace$ and $B = \lbrace \text{apple}, \text{banana}, \text{cherry}\}$. $A \subseteq B$.
2. $A = \{\text{cat}, \text{dog}\}$, $B = \{\text{cat}, \text{dog}, \text{rabbit}, \text{bird}\}$. $A \subseteq B$.

## Special Cases
1. **Empty Set**: The empty set $\emptyset$ is a subset of every set:
   $ \emptyset \subseteq A \text{ for any set } A. $

2. **Set is a Subset of Itself**: Every set is a subset of itself:
   $ A \subseteq A $

## Examples of Non-Subsets
1. Let $A = \lbrace 1, 4\rbrace$ and $B = \lbrace 1, 2, 3 \rbrace$. Here, $A \nsubseteq B$ because $4 \notin B$.
2. $A = \lbrace \text{cat}, \text{fox}\rbrace $, $B = \lbrace \text{cat}, \text{dog}\rbrace$. $A \nsubseteq B$ because $\text{fox} \notin B$.

## Summary
- A subset contains only elements that are present in another set.
- Special cases include the empty set and the fact that a set is a subset of itself.
- Non-subsets occur when even one element of the first set is not present in the second set.

By understanding subsets, you can better analyze relationships between sets and their elements.