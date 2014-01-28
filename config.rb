set :source, 'src/'
set :build_dir, 'compile/'
set :partials_dir, 'partial/'

set :css_dir, 'css/'
set :css_dir, 'temp/css' if development?
set :js_dir, 'js/'
set :images_dir, 'i/'

ignore '.idea/*'
ignore '.svn/*'
ignore '.sass-cache/*'
ignore 'scss/*'
ignore 'temp/*'

activate :relative_assets