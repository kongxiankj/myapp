/**
 * Created by wangying on 16/6/7.
 */
module.exports = function(grunt) {

    // Project configuration.
    //配置任务
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        //压缩javascript文件
        concat: {
            options: {
                //定义一个用于插入合并输出文件之间的字符
                separator: '\n\r'
            },
            dist: {
                //将要被合并的文件
                src: ['www/js/**/*.js', '!www/lib/**'],
                //合并后的js文件的存放位置
                dest: 'localtest/controller.js'
            },
            css:{
                src: ['www/css/*.css'],
                dest: 'localtest/app.css'
            }
        },

        // 监控文件的变化，执行grunt任务

        watch: {
            scripts: {
                files: ['www/**'],
                tasks: ['default'],
                options: {
                    spawn: false
                }
            }
        },


        // 把html文件转化成js文件

        html2js: {
            options: {
                // custom options, see below
                base:'www'
            },

            main: {
                src: ['www/templates/**/*.html'],
                dest: 'localtest/templates.js'
            }
        },


        replace: {
            another_example: {
                src:['www/templates/**/*.html'],
                overwrite: true,                // overwrite matched source files
                replacements: [{
                    from: 'testsource/img',
                    to: 'testsource/img/'

                }]
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-html2js');
    grunt.loadNpmTasks('grunt-text-replace');
    grunt.registerTask('default', ['replace','concat','html2js']);

};