	
import "@/css/reset.css"
import "@/assets/layui/css/layui.css"

import  "@/js/jquery.min.js"
import "@/js/layui.config.js"

$(function () {
	var layer = null;
	layui.use(['layer', 'laypage'], function () {
			layer = layui.layer;
			var laypage = layui.laypage;
			layer.alert('bingUtil')

	});
	
})
