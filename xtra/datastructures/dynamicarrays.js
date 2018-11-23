/*

Dynamic Arrays 

- Simple word processor example:
    - Strings are stored as arrays... use array?
    - Allocation of arrays in a low level language like C or Java, we have to specify upfront how many indices we want our array to have.
        - Computer has to reserve and commit space.
        - Can't reserve all its memory for a giant array.

    - We don't know ahead of time how much space to reserve.
        - Create an array and let it resize itself when it runs out of space!
    
    - 10 index area => Type DEAR + ' ' +  MOTHE... not enough space
    - Double the array size at a new place in free memory.
    - Copy all previous values from 10 index array into the 20 index array.
    - Free up 10 index array.

- Amortization: average time costs of Dynamic Arrays = 0(n)

- You don't need to specify the size ahead of time but some appends can be expensive.

 */