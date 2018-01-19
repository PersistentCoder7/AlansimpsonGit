const gulp = require('gulp');

gulp.task('hello1', function() {
    console.log('Hello1');
})

gulp.task('hello', function(){
console.log('Hello from GulpJS');
});

gulp.task('hello2', ['hello1','hello'], function() {
    console.log('World');
});