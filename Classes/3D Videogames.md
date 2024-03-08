# Points, Vectors, Versors
Points, vectors and versors are the basic data-type of $3D$ games.

immagine tabella 3

An example of a point is a vertex of a triangle; an example of a vecotr is one side of the triangle while an example of a versor is the normal of the triangle.

An example of points, vectors and versors in a character.

immagine slide 4

An example of points, vectors and versors in a spinner.

immagine slide 4

An example of points, vectors and versors in the following screenshot.

immagine slide 5

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


### Exercises

#### Point to point distance

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