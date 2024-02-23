/*para ordenar.*/

select * from pokemonusers order by poketype;
/*aqui los ordena por el tipo; en fuego y planta, alfabeticamente es primero la F(F de la palabra fuego y despues la P de planta) y despues la P*/

select * from pokemonusers order by poketype ASC; /*de manera ASCendente*/

select * from pokemonusers order by poketype DESC; /*de manera DESCendente*/
select * from pokemonusers where poketype="fuego" order by pokepower1 DESC;

select * from pokemonusers where poketype="fuego" order by pokepower1;/*Selecciona  todos los pokemons y toda la tabla de tipo fuego ordenados alfabeticamente por los poderes1: arañazo, estallido, lanzallamas (a,e,l)*/

select pokename from pokemonusers where poketype="fuego" order by pokepower1; 
/*Selecciona  solo los nombres de los pokemons tipo fuego ordenados alfabeticamente por los poderes1: arañazo, estallido, lanzallamas (a,e,l)*/