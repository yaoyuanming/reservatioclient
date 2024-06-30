module.exports = {
    devServer: {
		    proxy: {
		      '/reservation': {
		        target: 'http://8.130.31.211:86/reservation/',
						changeOrigin: true,
		        // pathRewrite: {
		        //   '^/reservation': ''
		        // }
		      }
		    },
	}
}