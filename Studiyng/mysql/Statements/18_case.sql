select *,
case 
    when ataque > 5  then 'mas fuerte que la mayoria'
    else 'es mas debil que la mayoria'
end as Masataque
from pokeusers;


-- con true y false
select *,
case 
    when ataque > 5  then true
    else false
end as Masataque
from pokeusers;

--agregando 1 linea mas when y then
select *,
case 
    when ataque > 5  then 'mas fuerte que la mayoria'
    when ataque = 8 then "los mas fuertes"
    else 'es mas debil que la mayoria'
end as Masataque
from pokeusers;