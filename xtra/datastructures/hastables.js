/*

Hash Tables

- Continuing from linkedlists
    - The drawbacks of Linked Lists are the slow look-up times
    - Since look-up speeds tend to be of higher importance we utilize arrays much more often than linked lists.

    - Example: Suppose we want to store the number of times letters appear within a sentence, paragraph, novel, etc.
        - Using the ASCII values we can store the letters at their index value. So 'A' = 65. Store the total count 'A' appears the the 65th index.
        - We now have the characters (implied by indices) and counts.

        Suppose we want to store the words instead...?

        - Example: Let's grab the sum of the ASCII 
            - 'lies' = 108+105+101+115 = 429 % by the number of slots we want to utilize, say 30. This results in 9
            - So now we store the result at that index and the value is the frequency of that particular word.
            - Our hashing function is the function that we chose to get our 'lies' word to equate to index 9.

            But what if there are other words with the same index? Such as 'foes'

            - 'foes' => 102+111+101+115 = 429 as well!

            Hash Collisions: occur when our hash function gives us the same value for different inputs.
                - Create a pointer and linked list for the various values.

            * Hash tables have fast lookups by key but some may be slow in you'll have to traverse the hash collision create linked lists.
*/