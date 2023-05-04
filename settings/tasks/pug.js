import gulpPug from "gulp-pug";
import webpHtmlNoSvg from "gulp-webp-html-nosvg";
import fs from "fs";

export const pug = () => {
    return app.gulp.src(app.path.src.pug)
        .pipe(app.plugins.plumber())
        .pipe(gulpPug({
            pretty: true,
            locals : {
                jsonData: JSON.parse(fs.readFileSync("./src/data/filter.json", "utf8"))
            }
        }))
        .pipe(app.plugins.replace(/@img\//g, 'img/'))
        .pipe(app.plugins.if(
            app.isBuild, webpHtmlNoSvg()
            )
        )
        .pipe(app.gulp.dest(app.path.build.pug))
        .pipe(app.plugins.browserSync.stream());
}