import $ from 'jquery';
import './style.css'
import ic from './icon.gif'
import user from './users.json'

var img=$("<img/>");
img.attr("src",ic);
$("<div></div>").text(user.name)
.addClass("hello")
.append($(img))
.appendTo($("body"));
	