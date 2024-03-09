# Points, Vectors, Versors
Points, vectors and versors are the basic data-type of $3D$ games. A point represents a position, a vector represents a distance, such as the segment connecting two points in space, while a versor, on the other hand, represents a direction: it's a vector but with a unit length.

immagine tabella 3

An example of a point is a vertex of a triangle; an example of a vector is one side of the triangle while an example of a versor is the normal of the triangle.

An example of points, vectors and versors in a character.

immagine slide 4

An example of points, vectors and versors in a spinner.

immagine slide 4

An example of points, vectors and versors in the following screenshot.

immagine slide 5

At the engine level, these elements are often (but not always) represented in a single way, namely:

```c#
class Vector3{
	float x, y, z; 
}
```

Nevertheless, it is important not to confuse semantically distinct elements with each other, much like distinguishing between variables that share the float type but represent different concepts such as temperature and length.

Some engines, however, differentiate by creating separate classes for points, vectors, and unit vectors. This way, the correctness of operations between these classes is automatically enforced rather than relying on the programmer to handle it.

## The algebra of points, vectors and versors
It is fundamental to understand each operation in three different ways:
- the **intuitive** way, that is, to know how to imagine it spatially, in three dimensions;
- the **operational** way, that is, to know how to compute it from data;
- the **syntactic** way, that is, to know how to write it down (in paper or code);
- the **rules**, that is, to know how to manipulate equations.

It is necessary also to familiarize with the way the operations behave, e.g., rules such as:
- commutativity or associativity of each operations;
- distributivity between pairs of operations;
- inverse operation, identity element and absorbing element.

The difference between two points $p_1 - p_2$ gives as result a vector $\vec{v}$.

immagine slide 8

The addition between a point and a vector $p_1 + \vec{v}$ gives as result a point $p_2$.

immagine slide 8

The addition between two vectors $\vec{v_1} + \vec{v_2}$ gives as result a vector $\vec{v_3}$.

immagine slide 8

The product of a vector and a scalar $\vec{v_1} * n$ gives as result a vector $\vec{v_2}$.

immagine slide 8

Combining the two preceding properties, it is easy to understand how the interpolation between two vectors $\vec{v_1}, \vec{v_2}$ with a scalar $n$ gives as result a vector: $mix(\vec{v_1}, \vec{v_2}, n) = (1 - n)\vec{v_1} + n\vec{v_2}$.

immagine interpolazione

The product of a vector and the scalar $-1$ gives as result the **opposite** vector, that is, the vector with 

### Exercises
The following are examples of spatial problem problems that need to be solved in $3D$ games. They can be solved simply using point/vector/versor algebra and lot of game engines libraries implement functions for many of them.

General schema for finding a solution:
- identify input and output (and their types);
- draw a schema;
- write the equations driven by the drawing, (using your spatial understanding of the operations) (e.g., what is orthogonal to what?);
- identify the unknowns;
- manipulate the equations according to the rules to extract the unknowns;
- if coding: everything is ready to code it!

#### Point to point distance
When the player in position $p$ is closer than $k$ to a powerup in position $q$, then the powerup is collected.



----------------------------------------------------------------

#### Ray-Plane intersection

----------------------------------------------------------------

#### Projection of a point on a line

----------------------------------------------------------------

#### Sphere-sphere intersection

----------------------------------------------------------------

#### The missile and the wall

----------------------------------------------------------------

#### Projection of a point on a segment

----------------------------------------------------------------

#### Plane vs Point test

----------------------------------------------------------------

#### Vision cones

----------------------------------------------------------------



----------------------------------------------------------------