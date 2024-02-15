as:
select pokename, pokepower1 as "podersitos"from pokeusers where ataque = 8
/*los que tienen ataque 8 enseña el pokepower1 y le cambia su nombre de "pokepower1" a podersitos y muestra a ellos, y a los que tienen el ataque en 8 y su nombre*/

concat():

select concat("nombre: ", pokename , ', ataque: ', ataque) from pokeusers; 
/*concatena y puedes concatenar strings*/
as: y concat():


/* concatenas con strings y a la tabla le das un alias, porque si no solo sale concat*/
select concat("nombre: ", pokename , ', ataque: ', ataque) as 'nombre y ataque' from pokeusers; 