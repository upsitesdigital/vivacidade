var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var browserSync = require('browser-sync').create();

var webpack = require('webpack');
var webpackConfig = require('./webpack.config.js');
var bundler = webpack(webpackConfig);

var uglify = require('gulp-uglify');

var isWatching = false;

/**
 * SVG
 */
gulp.task('svg2png', function() {
  var svg = gulp.src(['./src/img/svg/*.svg']);

  svg
    .pipe($.changed('./assets/img/'))
    .pipe($.svgmin())
    .pipe(gulp.dest('./assets/img/'));

  return svg;
});
/**
 * Icons
 */
gulp.task('svgicons', function() {
  var path = require('path');
  return gulp.src(['./src/img/icons/*.svg'])
    .pipe($.svgmin(function(file) {
      var prefix = path.basename(file.relative, path.extname(file.relative));
      return {
        plugins: [{
          removeAttrs: { attrs: 'fill' },
          cleanupIDs: {
            prefix: prefix + '-',
            minify: true
          }
        }]
      };
    }))
    .pipe($.svgstore())
    .pipe(gulp.dest('./assets/img/'));
});


/**
 * Sass
 */
gulp.task('sass', function() {
  return gulp.src(['./src/sass/main.scss'])
    .pipe($.sourcemaps.init())
    .pipe(
      $.sass({
        includePaths: ['./node_modules/'],
        outputStyle: 'expanded'
      })
      .on('error', $.sass.logError)
    )
    .pipe($.sourcemaps.write())
    .pipe(gulp.dest('./assets/css/'))
    .pipe(browserSync.stream());
});
gulp.task('home', function() {
  return gulp.src(['./src/sass/home.scss'])
    .pipe($.sourcemaps.init())
    .pipe(
      $.sass({
        includePaths: ['./node_modules/'],
        outputStyle: 'expanded'
      })
      .on('error', $.sass.logError)
    )
    .pipe($.sourcemaps.write())
    .pipe(gulp.dest('./assets/css/'))
    .pipe(browserSync.stream());
});
gulp.task('about', function() {
  return gulp.src(['./src/sass/about.scss'])
    .pipe($.sourcemaps.init())
    .pipe(
      $.sass({
        includePaths: ['./node_modules/'],
        outputStyle: 'expanded'
      })
      .on('error', $.sass.logError)
    )
    .pipe($.sourcemaps.write())
    .pipe(gulp.dest('./assets/css/'))
    .pipe(browserSync.stream());
});
gulp.task('list-events', function() {
  return gulp.src(['./src/sass/list-events.scss'])
    .pipe($.sourcemaps.init())
    .pipe(
      $.sass({
        includePaths: ['./node_modules/'],
        outputStyle: 'expanded'
      })
      .on('error', $.sass.logError)
    )
    .pipe($.sourcemaps.write())
    .pipe(gulp.dest('./assets/css/'))
    .pipe(browserSync.stream());
});
gulp.task('internal-event', function() {
  return gulp.src(['./src/sass/internal-event.scss'])
    .pipe($.sourcemaps.init())
    .pipe(
      $.sass({
        includePaths: ['./node_modules/'],
        outputStyle: 'expanded'
      })
      .on('error', $.sass.logError)
    )
    .pipe($.sourcemaps.write())
    .pipe(gulp.dest('./assets/css/'))
    .pipe(browserSync.stream());
});
gulp.task('list-tickets', function() {
  return gulp.src(['./src/sass/list-tickets.scss'])
    .pipe($.sourcemaps.init())
    .pipe(
      $.sass({
        includePaths: ['./node_modules/'],
        outputStyle: 'expanded'
      })
      .on('error', $.sass.logError)
    )
    .pipe($.sourcemaps.write())
    .pipe(gulp.dest('./assets/css/'))
    .pipe(browserSync.stream());
});
gulp.task('register', function() {
  return gulp.src(['./src/sass/register.scss'])
    .pipe($.sourcemaps.init())
    .pipe(
      $.sass({
        includePaths: ['./node_modules/'],
        outputStyle: 'expanded'
      })
      .on('error', $.sass.logError)
    )
    .pipe($.sourcemaps.write())
    .pipe(gulp.dest('./assets/css/'))
    .pipe(browserSync.stream());
});
gulp.task('contact', function() {
  return gulp.src(['./src/sass/contact.scss'])
    .pipe($.sourcemaps.init())
    .pipe(
      $.sass({
        includePaths: ['./node_modules/'],
        outputStyle: 'expanded'
      })
      .on('error', $.sass.logError)
    )
    .pipe($.sourcemaps.write())
    .pipe(gulp.dest('./assets/css/'))
    .pipe(browserSync.stream());
});
gulp.task('blog', function() {
  return gulp.src(['./src/sass/blog.scss'])
    .pipe($.sourcemaps.init())
    .pipe(
      $.sass({
        includePaths: ['./node_modules/'],
        outputStyle: 'expanded'
      })
      .on('error', $.sass.logError)
    )
    .pipe($.sourcemaps.write())
    .pipe(gulp.dest('./assets/css/'))
    .pipe(browserSync.stream());
});
gulp.task('categories', function() {
  return gulp.src(['./src/sass/categories.scss'])
    .pipe($.sourcemaps.init())
    .pipe(
      $.sass({
        includePaths: ['./node_modules/'],
        outputStyle: 'expanded'
      })
      .on('error', $.sass.logError)
    )
    .pipe($.sourcemaps.write())
    .pipe(gulp.dest('./assets/css/'))
    .pipe(browserSync.stream());
});
gulp.task('internal-post', function() {
  return gulp.src(['./src/sass/internal-post.scss'])
    .pipe($.sourcemaps.init())
    .pipe(
      $.sass({
        includePaths: ['./node_modules/'],
        outputStyle: 'expanded'
      })
      .on('error', $.sass.logError)
    )
    .pipe($.sourcemaps.write())
    .pipe(gulp.dest('./assets/css/'))
    .pipe(browserSync.stream());
});
gulp.task('author', function() {
  return gulp.src(['./src/sass/author.scss'])
    .pipe($.sourcemaps.init())
    .pipe(
      $.sass({
        includePaths: ['./node_modules/'],
        outputStyle: 'expanded'
      })
      .on('error', $.sass.logError)
    )
    .pipe($.sourcemaps.write())
    .pipe(gulp.dest('./assets/css/'))
    .pipe(browserSync.stream());
});

/**
 * Sass small
 */
gulp.task('home-small', function() {
  return gulp.src(['./src/sass/home-small.scss'])
    .pipe($.sourcemaps.init())
    .pipe(
      $.sass({
        includePaths: ['./node_modules/'],
        outputStyle: 'expanded'
      })
      .on('error', $.sass.logError)
    )
    .pipe($.sourcemaps.write())
    .pipe(gulp.dest('./assets/css/'))
    .pipe(browserSync.stream());
});
gulp.task('about-small', function() {
  return gulp.src(['./src/sass/about-small.scss'])
    .pipe($.sourcemaps.init())
    .pipe(
      $.sass({
        includePaths: ['./node_modules/'],
        outputStyle: 'expanded'
      })
      .on('error', $.sass.logError)
    )
    .pipe($.sourcemaps.write())
    .pipe(gulp.dest('./assets/css/'))
    .pipe(browserSync.stream());
});
gulp.task('list-events-small', function() {
  return gulp.src(['./src/sass/list-events-small.scss'])
    .pipe($.sourcemaps.init())
    .pipe(
      $.sass({
        includePaths: ['./node_modules/'],
        outputStyle: 'expanded'
      })
      .on('error', $.sass.logError)
    )
    .pipe($.sourcemaps.write())
    .pipe(gulp.dest('./assets/css/'))
    .pipe(browserSync.stream());
});
gulp.task('internal-event-small', function() {
  return gulp.src(['./src/sass/internal-event-small.scss'])
    .pipe($.sourcemaps.init())
    .pipe(
      $.sass({
        includePaths: ['./node_modules/'],
        outputStyle: 'expanded'
      })
      .on('error', $.sass.logError)
    )
    .pipe($.sourcemaps.write())
    .pipe(gulp.dest('./assets/css/'))
    .pipe(browserSync.stream());
});
gulp.task('list-tickets-small', function() {
  return gulp.src(['./src/sass/list-tickets-small.scss'])
    .pipe($.sourcemaps.init())
    .pipe(
      $.sass({
        includePaths: ['./node_modules/'],
        outputStyle: 'expanded'
      })
      .on('error', $.sass.logError)
    )
    .pipe($.sourcemaps.write())
    .pipe(gulp.dest('./assets/css/'))
    .pipe(browserSync.stream());
});
gulp.task('register-small', function() {
  return gulp.src(['./src/sass/register-small.scss'])
    .pipe($.sourcemaps.init())
    .pipe(
      $.sass({
        includePaths: ['./node_modules/'],
        outputStyle: 'expanded'
      })
      .on('error', $.sass.logError)
    )
    .pipe($.sourcemaps.write())
    .pipe(gulp.dest('./assets/css/'))
    .pipe(browserSync.stream());
});
gulp.task('contact-small', function() {
  return gulp.src(['./src/sass/contact-small.scss'])
    .pipe($.sourcemaps.init())
    .pipe(
      $.sass({
        includePaths: ['./node_modules/'],
        outputStyle: 'expanded'
      })
      .on('error', $.sass.logError)
    )
    .pipe($.sourcemaps.write())
    .pipe(gulp.dest('./assets/css/'))
    .pipe(browserSync.stream());
});
gulp.task('blog-small', function() {
  return gulp.src(['./src/sass/blog-small.scss'])
    .pipe($.sourcemaps.init())
    .pipe(
      $.sass({
        includePaths: ['./node_modules/'],
        outputStyle: 'expanded'
      })
      .on('error', $.sass.logError)
    )
    .pipe($.sourcemaps.write())
    .pipe(gulp.dest('./assets/css/'))
    .pipe(browserSync.stream());
});
gulp.task('categories-small', function() {
  return gulp.src(['./src/sass/categories-small.scss'])
    .pipe($.sourcemaps.init())
    .pipe(
      $.sass({
        includePaths: ['./node_modules/'],
        outputStyle: 'expanded'
      })
      .on('error', $.sass.logError)
    )
    .pipe($.sourcemaps.write())
    .pipe(gulp.dest('./assets/css/'))
    .pipe(browserSync.stream());
});
gulp.task('internal-post-small', function() {
  return gulp.src(['./src/sass/internal-post-small.scss'])
    .pipe($.sourcemaps.init())
    .pipe(
      $.sass({
        includePaths: ['./node_modules/'],
        outputStyle: 'expanded'
      })
      .on('error', $.sass.logError)
    )
    .pipe($.sourcemaps.write())
    .pipe(gulp.dest('./assets/css/'))
    .pipe(browserSync.stream());
});
gulp.task('author-small', function() {
  return gulp.src(['./src/sass/author-small.scss'])
    .pipe($.sourcemaps.init())
    .pipe(
      $.sass({
        includePaths: ['./node_modules/'],
        outputStyle: 'expanded'
      })
      .on('error', $.sass.logError)
    )
    .pipe($.sourcemaps.write())
    .pipe(gulp.dest('./assets/css/'))
    .pipe(browserSync.stream());
});

/**
 * Sass mobile
 */
gulp.task('home-mobile', function() {
  return gulp.src(['./src/sass/home-mobile.scss'])
    .pipe($.sourcemaps.init())
    .pipe(
      $.sass({
        includePaths: ['./node_modules/'],
        outputStyle: 'expanded'
      })
      .on('error', $.sass.logError)
    )
    .pipe($.sourcemaps.write())
    .pipe(gulp.dest('./assets/css/'))
    .pipe(browserSync.stream());
});
gulp.task('about-mobile', function() {
  return gulp.src(['./src/sass/about-mobile.scss'])
    .pipe($.sourcemaps.init())
    .pipe(
      $.sass({
        includePaths: ['./node_modules/'],
        outputStyle: 'expanded'
      })
      .on('error', $.sass.logError)
    )
    .pipe($.sourcemaps.write())
    .pipe(gulp.dest('./assets/css/'))
    .pipe(browserSync.stream());
});
gulp.task('list-events-mobile', function() {
  return gulp.src(['./src/sass/list-events-mobile.scss'])
    .pipe($.sourcemaps.init())
    .pipe(
      $.sass({
        includePaths: ['./node_modules/'],
        outputStyle: 'expanded'
      })
      .on('error', $.sass.logError)
    )
    .pipe($.sourcemaps.write())
    .pipe(gulp.dest('./assets/css/'))
    .pipe(browserSync.stream());
});
gulp.task('internal-event-mobile', function() {
  return gulp.src(['./src/sass/internal-event-mobile.scss'])
    .pipe($.sourcemaps.init())
    .pipe(
      $.sass({
        includePaths: ['./node_modules/'],
        outputStyle: 'expanded'
      })
      .on('error', $.sass.logError)
    )
    .pipe($.sourcemaps.write())
    .pipe(gulp.dest('./assets/css/'))
    .pipe(browserSync.stream());
});
gulp.task('list-tickets-mobile', function() {
  return gulp.src(['./src/sass/list-tickets-mobile.scss'])
    .pipe($.sourcemaps.init())
    .pipe(
      $.sass({
        includePaths: ['./node_modules/'],
        outputStyle: 'expanded'
      })
      .on('error', $.sass.logError)
    )
    .pipe($.sourcemaps.write())
    .pipe(gulp.dest('./assets/css/'))
    .pipe(browserSync.stream());
});
gulp.task('register-mobile', function() {
  return gulp.src(['./src/sass/register-mobile.scss'])
    .pipe($.sourcemaps.init())
    .pipe(
      $.sass({
        includePaths: ['./node_modules/'],
        outputStyle: 'expanded'
      })
      .on('error', $.sass.logError)
    )
    .pipe($.sourcemaps.write())
    .pipe(gulp.dest('./assets/css/'))
    .pipe(browserSync.stream());
});
gulp.task('contact-mobile', function() {
  return gulp.src(['./src/sass/contact-mobile.scss'])
    .pipe($.sourcemaps.init())
    .pipe(
      $.sass({
        includePaths: ['./node_modules/'],
        outputStyle: 'expanded'
      })
      .on('error', $.sass.logError)
    )
    .pipe($.sourcemaps.write())
    .pipe(gulp.dest('./assets/css/'))
    .pipe(browserSync.stream());
});
gulp.task('blog-mobile', function() {
  return gulp.src(['./src/sass/blog-mobile.scss'])
    .pipe($.sourcemaps.init())
    .pipe(
      $.sass({
        includePaths: ['./node_modules/'],
        outputStyle: 'expanded'
      })
      .on('error', $.sass.logError)
    )
    .pipe($.sourcemaps.write())
    .pipe(gulp.dest('./assets/css/'))
    .pipe(browserSync.stream());
});
gulp.task('categories-mobile', function() {
  return gulp.src(['./src/sass/categories-mobile.scss'])
    .pipe($.sourcemaps.init())
    .pipe(
      $.sass({
        includePaths: ['./node_modules/'],
        outputStyle: 'expanded'
      })
      .on('error', $.sass.logError)
    )
    .pipe($.sourcemaps.write())
    .pipe(gulp.dest('./assets/css/'))
    .pipe(browserSync.stream());
});
gulp.task('internal-post-mobile', function() {
  return gulp.src(['./src/sass/internal-post-mobile.scss'])
    .pipe($.sourcemaps.init())
    .pipe(
      $.sass({
        includePaths: ['./node_modules/'],
        outputStyle: 'expanded'
      })
      .on('error', $.sass.logError)
    )
    .pipe($.sourcemaps.write())
    .pipe(gulp.dest('./assets/css/'))
    .pipe(browserSync.stream());
});
gulp.task('author-mobile', function() {
  return gulp.src(['./src/sass/author-mobile.scss'])
    .pipe($.sourcemaps.init())
    .pipe(
      $.sass({
        includePaths: ['./node_modules/'],
        outputStyle: 'expanded'
      })
      .on('error', $.sass.logError)
    )
    .pipe($.sourcemaps.write())
    .pipe(gulp.dest('./assets/css/'))
    .pipe(browserSync.stream());
});



/**
 * Sass min
 */
gulp.task('sass:release', ['sass'], function() {
  return gulp.src(['./assets/css/main.css'])
    .pipe($.autoprefixer(['last 2 versions', 'ie 8', 'ie 9', '> 1%']))
    .pipe($.rename({ suffix: '.min' }))
    .pipe($.cleanCss({ compatibility: 'ie8' }))
    .pipe(gulp.dest('./assets/css/'));
});
gulp.task('home:release', ['home'], function() {
  return gulp.src(['./assets/css/home.css'])
    .pipe($.autoprefixer(['last 2 versions', 'ie 8', 'ie 9', '> 1%']))
    .pipe($.rename({ suffix: '.min' }))
    .pipe($.cleanCss({ compatibility: 'ie8' }))
    .pipe(gulp.dest('./assets/css/'));
});
gulp.task('about:release', ['about'], function() {
  return gulp.src(['./assets/css/about.css'])
    .pipe($.autoprefixer(['last 2 versions', 'ie 8', 'ie 9', '> 1%']))
    .pipe($.rename({ suffix: '.min' }))
    .pipe($.cleanCss({ compatibility: 'ie8' }))
    .pipe(gulp.dest('./assets/css/'));
});
gulp.task('list-events:release', ['list-events'], function() {
  return gulp.src(['./assets/css/list-events.css'])
    .pipe($.autoprefixer(['last 2 versions', 'ie 8', 'ie 9', '> 1%']))
    .pipe($.rename({ suffix: '.min' }))
    .pipe($.cleanCss({ compatibility: 'ie8' }))
    .pipe(gulp.dest('./assets/css/'));
});
gulp.task('internal-event:release', ['internal-event'], function() {
  return gulp.src(['./assets/css/internal-event.css'])
    .pipe($.autoprefixer(['last 2 versions', 'ie 8', 'ie 9', '> 1%']))
    .pipe($.rename({ suffix: '.min' }))
    .pipe($.cleanCss({ compatibility: 'ie8' }))
    .pipe(gulp.dest('./assets/css/'));
});
gulp.task('list-tickets:release', ['list-tickets'], function() {
  return gulp.src(['./assets/css/list-tickets.css'])
    .pipe($.autoprefixer(['last 2 versions', 'ie 8', 'ie 9', '> 1%']))
    .pipe($.rename({ suffix: '.min' }))
    .pipe($.cleanCss({ compatibility: 'ie8' }))
    .pipe(gulp.dest('./assets/css/'));
});
gulp.task('register:release', ['register'], function() {
  return gulp.src(['./assets/css/register.css'])
    .pipe($.autoprefixer(['last 2 versions', 'ie 8', 'ie 9', '> 1%']))
    .pipe($.rename({ suffix: '.min' }))
    .pipe($.cleanCss({ compatibility: 'ie8' }))
    .pipe(gulp.dest('./assets/css/'));
});
gulp.task('contact:release', ['contact'], function() {
  return gulp.src(['./assets/css/contact.css'])
    .pipe($.autoprefixer(['last 2 versions', 'ie 8', 'ie 9', '> 1%']))
    .pipe($.rename({ suffix: '.min' }))
    .pipe($.cleanCss({ compatibility: 'ie8' }))
    .pipe(gulp.dest('./assets/css/'));
});
gulp.task('blog:release', ['blog'], function() {
  return gulp.src(['./assets/css/blog.css'])
    .pipe($.autoprefixer(['last 2 versions', 'ie 8', 'ie 9', '> 1%']))
    .pipe($.rename({ suffix: '.min' }))
    .pipe($.cleanCss({ compatibility: 'ie8' }))
    .pipe(gulp.dest('./assets/css/'));
});
gulp.task('categories:release', ['categories'], function() {
  return gulp.src(['./assets/css/categories.css'])
    .pipe($.autoprefixer(['last 2 versions', 'ie 8', 'ie 9', '> 1%']))
    .pipe($.rename({ suffix: '.min' }))
    .pipe($.cleanCss({ compatibility: 'ie8' }))
    .pipe(gulp.dest('./assets/css/'));
});
gulp.task('internal-post:release', ['internal-post'], function() {
  return gulp.src(['./assets/css/internal-post.css'])
    .pipe($.autoprefixer(['last 2 versions', 'ie 8', 'ie 9', '> 1%']))
    .pipe($.rename({ suffix: '.min' }))
    .pipe($.cleanCss({ compatibility: 'ie8' }))
    .pipe(gulp.dest('./assets/css/'));
});
gulp.task('author:release', ['author'], function() {
  return gulp.src(['./assets/css/author.css'])
    .pipe($.autoprefixer(['last 2 versions', 'ie 8', 'ie 9', '> 1%']))
    .pipe($.rename({ suffix: '.min' }))
    .pipe($.cleanCss({ compatibility: 'ie8' }))
    .pipe(gulp.dest('./assets/css/'));
});






gulp.task('js:release', function() {
  gulp.src(['./assets/js/bundle.js'])
    .pipe(uglify())
    .pipe($.rename({ suffix: '.min' }))
    .pipe(gulp.dest('./assets/js/')) // It will create folder client.min.js
});


/**
 * Javascript
 */
gulp.task('scripts', function(cb) {
  var handler = function(err, stats) {
    if (err) {
      throw new $.util.PluginError('webpack', err);
    }

    $.util.log('[webpack]', stats.toString('normal'));

    browserSync.reload(webpackConfig.output.filename);
  };

  if (isWatching) {
    bundler.watch(200, handler);
  } else {
    bundler.run(handler);
  }

  return cb();
});


/**
 * Live preview
 */
gulp.task('serve', function() {
  browserSync.init({
    // open: false,
    server: {
      // proxy: 'framework.local.com',
      baseDir: './'
    }

  });
});


/**
 * Build
 */
gulp.task('build', [
  'sass',
  'home',
  'about',
  'list-events',
  'internal-event',
  'list-tickets',
  'register',
  'contact',
  'blog',
  'categories',
  'internal-post',
  'author',
  'home-small',
  'about-small',
  'list-events-small',
  'internal-event-small',
  'list-tickets-small',
  'register-small',
  'contact-small',
  'blog-small',
  'categories-small',
  'internal-post-small',
  'author-small',
  'home-mobile',
  'about-mobile',
  'list-events-mobile',
  'internal-event-mobile',
  'list-tickets-mobile',
  'register-mobile',
  'contact-mobile',
  'blog-mobile',
  'categories-mobile',
  'internal-post-mobile',
  'author-mobile',
  'scripts',
  'svg2png'
], function() {
  $.util.log($.util.colors.green('Build is finished'));
});

gulp.task('build:min', function() {
  gulp.start('sass:release',
    'home:release',
    'about:release',
    'list-events:release',
    'internal-event:release',
    'list-tickets:release',
    'register:release',
    'contact:release',
    'blog:release',
    'categories:release',
    'internal-post:release',
    'author:release',
    'js:release');
});

/**
 * Watch files
 */
gulp.task('watch', ['serve'], function() {
  isWatching = true;

  /* Watch htmls */
  gulp.watch('./*.html', { cwd: './' }).on('change', browserSync.reload);

  /* Watch styles */
  gulp.watch(['**/*.scss'], { cwd: './src/sass/' }, [
    'sass',
    'home',
    'about',
    'list-events',
    'internal-event',
    'list-tickets',
    'register',
    'contact',
    'blog',
    'categories',
    'internal-post',
    'author',

    'home-small',
    'about-small',
    'list-events-small',
    'internal-event-small',
    'list-tickets-small',
    'register-small',
    'contact-small',
    'blog-small',
    'categories-small',
    'internal-post-small',
    'author-small',

    'home-mobile',
    'about-mobile',
    'list-events-mobile',
    'internal-event-mobile',
    'list-tickets-mobile',
    'register-mobile',
    'contact-mobile',
    'blog-mobile',
    'categories-mobile',
    'internal-post-mobile',
    'author-mobile',

  ]).on('change', browserSync.reload);

  /* Watch SVG */
  gulp.watch(['*.svg'], { cwd: './src/img/icons/' }, ['svgicons']).on('change', browserSync.reload);
  gulp.watch(['*.svg'], { cwd: './src/img/svg/' }, ['svg2png']).on('change', browserSync.reload);
});

/**
 * Default task
 */
gulp.task('default', ['watch', 'build', 'svgicons']);