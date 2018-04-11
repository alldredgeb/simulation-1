delete from bin_items 
where shelf = $1
and bin_id = $2;