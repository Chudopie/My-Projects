select * from pokeusers where ataque between 5 and 8/*el ataque entre 5 y 8, no poner alrevez, entre 8 y 5 porque no los encuentra, solo encuentra de manera ascendente de 1 a 10 no de .. 100 a 1 por ejemplo eso estaria mal y no encontraria a ninguno*/
/*y si lo haces como debe de ser ejemplo: */
select * from pokeusers where ataque between 5 and 9
/*de 9? pero no hay 9 de ataque en la table, de todos modos encontrara hasta el 8 sin problema*/