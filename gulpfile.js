const gulp = require("gulp");
const bom = require("gulp-bom");
const ext_replace = require("gulp-ext-replace");

gulp.task("bom-ify", () => {
  gulp
    .src("./test-files/*.srt")
    .pipe(bom())
    .pipe(gulp.dest("dist"));
});

gulp.task("change-ext", () => {
  gulp
    .src("./ext-files/*.txt")
    .pipe(ext_replace(".srt"))
    .pipe(gulp.dest("dist-ext"));
});

gulp.task("default", ["bom-ify", "change-ext"]);
