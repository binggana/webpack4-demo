const miniCssExtractPlugin = require("mini-css-extract-plugin");
const rules = [{
		test: /\.(css|scss|sass)$/,
		// 不分离的写法
		// use: ["style-loader", "css-loader",sass-loader"]
		// 使用postcss不分离的写法
		// use: ["style-loader", "css-loader", "sass-loader","postcss-loader"]
		// 此处为分离css的写法
		/*use: extractTextPlugin.extract({
			fallback: "style-loader",
			use: ["css-loader", "sass-loader"],
			// css中的基础路径
			publicPath: "../"
		})*/
		// 区别开发环境和生成环境
		use: process.env.NODE_ENV === "development" ? ["style-loader", "css-loader", "sass-loader", "postcss-loader"] : [
		{
			loader:miniCssExtractPlugin.loader,
			options:{
				publicPath: '../'
			}
		},"css-loader", "sass-loader", "postcss-loader"],
	},
	{
		test: /\.js$/,
		use: ["babel-loader"],
		// 不检查node_modules下的js文件
		exclude: "/node_modules/"
	}, {
		test: /\.(png|jpe?g|gif)$/,
		use: [{
			// 需要下载file-loader和url-loader
			loader: "url-loader",
			options: {
				limit: 5 * 1024, //小于这个值将会以base64位图片打包处理
				// 图片文件输出的文件夹
				outputPath: "images"
			}
		}]
	},
	{
		test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
		loader: 'url-loader',
		options: {
			limit: 10000,
			outputPath: "font"
		}
	},
	{
		test: /\.(mp4|svg|ico)(\?.*)?$/,
        loader: 'url-loader',
        options: {
		  limit: 10000,
		  name:"images/[name].[hash].[ext]"
        }
	},
	{
		test: /\.html$/,
		// html中的img标签
		use: ["html-withimg-loader"]
	}, {
		test: /\.less$/,
		// 三个loader的顺序不能变
		// 不分离的写法
		// use: ["style-loader", "css-loader", "less-loader"]
		// 区别开发环境和生成环境
		use: process.env.NODE_ENV === "development" ? ["style-loader", "css-loader", "less-loader"] : [{
			loader:miniCssExtractPlugin.loader,
			options:{
				publicPath: '../'
			}
		},"css-loader", "sass-loader", "postcss-loader"],
	},
];
module.exports = rules;