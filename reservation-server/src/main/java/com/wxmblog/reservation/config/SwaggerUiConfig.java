//package com.wxmblog.reservation.config;
//
//import com.fasterxml.classmate.TypeResolver;
//import org.springframework.beans.factory.annotation.Value;
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//import springfox.documentation.builders.ApiInfoBuilder;
//import springfox.documentation.builders.ParameterBuilder;
//import springfox.documentation.builders.PathSelectors;
//import springfox.documentation.builders.RequestHandlerSelectors;
//import springfox.documentation.schema.ModelRef;
//import springfox.documentation.service.ApiInfo;
//import springfox.documentation.service.Parameter;
//import springfox.documentation.spi.DocumentationType;
//import springfox.documentation.spring.web.plugins.Docket;
//import springfox.documentation.swagger2.annotations.EnableSwagger2;
//
//import javax.annotation.Resource;
//import java.util.ArrayList;
//import java.util.List;
//
///**
// * @author ：Yao Yuanming
// * @date ：2023/2/22 14:18
// * @description：
// */
//@Configuration
//@EnableSwagger2
//public class SwaggerUiConfig {
//
//    @Value("${swagger.enable:true}")
//    private boolean swaggerEnable;
//
//    @Bean
//    public Docket createSwaggerRestApi() {
//        ParameterBuilder param = new ParameterBuilder();
//        List<Parameter> parameters = new ArrayList<>();
//        param.name("Cookie").description("Cookie").modelRef(new ModelRef("string")).parameterType("header")
//                .required(false).build();
//        parameters.add(param.build());
//        return new Docket(DocumentationType.SWAGGER_2).apiInfo(apiInfo()).enable(swaggerEnable).select()
//                .apis(RequestHandlerSelectors.basePackage("com.wxmblog.reservation.controller"))
//                .paths(PathSelectors.any()).build().globalOperationParameters(parameters);
//    }
//
//    private ApiInfo apiInfo() {
//        return new ApiInfoBuilder().title("AwsomeChat Api").description("AwsomeChat的接口文档").version("1.0").build();
//    }
//
//
//}
