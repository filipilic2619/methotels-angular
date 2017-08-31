<?php
$niz= array("sobe" => array());

$broj=100;
for ($i=0; $i<51; $i++)
{
    $krevet = rand(1,3);
    $povrsina = rand(25, 70);
    $niz1= array("broj" => $broj, "krevet" => $krevet, "povrsina" => $povrsina);
    array_push($niz["sobe"], $niz1);
    $broj++;
}

$out=json_encode($niz);

echo $out;
?>