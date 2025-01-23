# Understanding Subsets

## Definition of a Subset
A subset is a set in which all the elements are also elements of another set. 

Formally, a set \(A\) is a subset of a set \(B\) if and only if every element of \(A\) is also an element of \(B\). This is written as:

\[ A \subseteq B \]

If \(A\) is a subset of \(B\) but \(A \neq B\), \(A\) is called a proper subset of \(B\), denoted as:

\[ A \subset B \]

## Examples of Subsets

### Numeric Examples
1. Let \(A = \{1, 2\}\) and \(B = \{1, 2, 3\}\). Here, \(A \subseteq B\) because every element of \(A\) is in \(B\).
2. \(A = \{3, 5, 7\}\), \(B = \{3, 5, 7, 9, 11\}\). \(A \subseteq B\).

### Non-Numeric Examples
1. Let \(A = \{\text{apple}, \text{banana}\}\) and \(B = \{\text{apple}, \text{banana}, \text{cherry}\}\). \(A \subseteq B\).
2. \(A = \{\text{cat}, \text{dog}\}\), \(B = \{\text{cat}, \text{dog}, \text{rabbit}, \text{bird}\}\). \(A \subseteq B\).

## Special Cases
1. **Empty Set**: The empty set \(\emptyset\) is a subset of every set:
   \[ \emptyset \subseteq B \text{ for any set } B. \]

2. **Set is a Subset of Itself**: Every set is a subset of itself:
   \[ A \subseteq A \]

## Examples of Non-Subsets
1. Let \(A = \{1, 4\}\) and \(B = \{1, 2, 3\}\). Here, \(A \nsubseteq B\) because \(4 \notin B\).
2. \(A = \{\text{cat}, \text{fox}\}\), \(B = \{\text{cat}, \text{dog}\}\). \(A \nsubseteq B\) because \(\text{fox} \notin B\).

## Summary
- A subset contains only elements that are present in another set.
- Special cases include the empty set and the fact that a set is a subset of itself.
- Non-subsets occur when even one element of the first set is not present in the second set.

By understanding subsets, you can better analyze relationships between sets and their elements.
