/**
 * little-table - Tiny responsive tables
 * @version v0.0.0
 * @link https://github.com/judas-christ/little-table
 * @license MIT
 */
var littleTable=function(e,t){function l(e){e=e||{};var l,a=t.querySelectorAll(e.selector||r.selector),o=0;for(a.length;l=a[o];o++){var n=l.querySelectorAll("thead th");console.log(n);var c,i=l.querySelectorAll("tbody tr"),u=0;for(i.length;c=i[u];u++){var s,d=c.querySelectorAll("td"),h=0;for(d.length;s=d[h];h++){var v=n[h].innerHTML;s.setAttribute("data-little-heading",v)}}l.className+=" little-table"}}var r={selector:"[data-little-table]"};return l(),l}(this,document);