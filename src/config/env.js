/**
 * 配置编译环境和线上环境之间的切换
 * 
 * baseUrl: 域名地址
 * routerMode: 路由模式
 * imgBaseUrl: 图片所在域名地址
 * 
 */

let baseUrl = ''; 
let routerMode = 'hash';
let imgBaseUrl = '';
// module.exports = merge(prodEnv, {
// 	NODE_ENV: '"development"',
// 	MOCK: 'true',
//   })
//   //MOCK为了只在开发环境使用mock，而打包到生产环境时自动不使用moc
//   module.exports = {
// 	NODE_ENV: '"production"',
// 	MOCK: 'false',
//   }
if (process.env.NODE_ENV == 'development') {
	// imgBaseUrl = '/img/';
	// baseUrl = 'http://172.30.201.30'; 
	baseUrl = '//elm.cangdu.org';
    imgBaseUrl = '//elm.cangdu.org/img/';
}else if(process.env.NODE_ENV == 'production'){
	baseUrl = '//elm.cangdu.org';
    imgBaseUrl = '//elm.cangdu.org/img/';
}
// module.exports=merge({
// 	NODE_ENV: '"development"',
//     MOCK: 'true',
// })
export {
	baseUrl,
	routerMode,
	imgBaseUrl,
}