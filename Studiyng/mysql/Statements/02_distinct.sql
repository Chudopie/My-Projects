select distinct * from pokemonusers; /*todo lo distinto de: en ese caso fue pokemonusers de el nombre de la tabla, pues todo es diferente de el nombre de la tabla entonces sale toda la tabla.*/

select distinct poketype from pokemonusers; /*si se repite algun valor de por ejemplo los tipos de pokemon si se repite el tipo fuego o planta, ya no salen los siguientes*/



select distinct poketype from pokemonusers where poketype = "fuego"; 
/*solo aparece el tipo fuego porque le pedimos con distinct; el tipo fuego en pokemonusers es distinto de los demas? ok en fuego no son distintos, son iguales  entonces solo enseña el tipo fuego porque los demas tambien lo son, muy obvio pero asi era el ejemplo*/