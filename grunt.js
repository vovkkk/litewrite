module.exports = function(grunt) {

  grunt.initConfig({

    requirejs: {
      almond: true,
      replaceRequireScript: [{
        files: ['build/index.html'],
        module: 'main'
      }],
      modules: [{name: 'main'}],
      dir: 'build/',
      appDir: '.',
      baseUrl: 'js',
      inlineText: true,
      wrap: true,
      mainConfigFile: 'js/main.js',
      paths: {
      },
      stubModules: [
        'utils/log',
        'text'
      ]
    },

    watch: {
        files: [],
        tasks: ''
    }

  });

  grunt.loadNpmTasks('grunt-requirejs');

  grunt.registerTask('build', 'requirejs');

  grunt.registerTask('default', 'server watch');

};