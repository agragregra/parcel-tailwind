<h1>Parcel Tailwind</h1>
<p>Lightweight Parcel Template with Tailwind</p>

<p>
	<img src="https://raw.githubusercontent.com/agragregra/parcel-tailwind/master/src/img/parcel-tailwind.jpg" alt="Parcel HTML Template with Tailwind">
</p>

<p><strong>Parcel Tailwind</strong> - lightweight startup environment with <strong>Parcel</strong>, <strong>Preprocessors (Sass, Scss)</strong>, <strong>PostCSS</strong>, <strong>Autoprefixer</strong>, <strong>HTML imports</strong> (posthtml-include), <strong>npm run build</strong>, <strong>imagemin + webp</strong>.</p>

<h2>How to use Parcel Tailwind</h2>

<p>Clone into the current folder with remove all unnecessary (one command):</p>

<pre>git clone https://github.com/agragregra/pt .; rm -rf trunk .gitignore readme.md .git</pre>

<ol>
	<li>Clone or <a href="https://github.com/agragregra/pt/archive/master.zip">Download</a> <strong>Parcel Tailwind</strong> from GitHub</li>
	<li>Install Node Modules: <strong>npm i</strong></li>
	<li>Run: <strong>npm start</strong></li>
</ol>

<h2>Basic rules</h2>

<h4>src's & dist's:</h4>

<ol>
	<li>All <strong>src | dist scripts</strong> located in <strong>src/js/app.js | dist/js/app.js</strong></li>
	<li><strong>Main Sass|Scss</strong> src files located in <strong>src/styles/</strong></li>
	<li>All <strong>compressed styles</strong> located in <strong>dist/css/main.css</strong></li>
	<li>Project <strong>styles config</strong> placed in <strong>src/styles/_config.sass</strong></li>
	<li>All <strong>src images</strong> placed in <strong>src/img/</strong> folder</li>
	<li>All <strong>compressed images</strong> placed in <strong>dist/img/</strong> folder</li>
</ol>

<h4>Include parts of HTML code:</h4>

<p>Include parts of html code is implemented using posthtml-include. You can import any part of the code using construction in any of html files:</p>

<pre>&lt;include src="parts/component.html" locals='{
	"name": "Ivan Vasilievich",
	"img": "img/first.jpg"
}'&gt;&lt;/include&gt;</pre>

<p>In "src/parts/component.html":</p>

<pre>
&lt;Your Name: {{ name }}&gt;
&lt;Your Photo: &lt;img src="{{ img }}?as=webp"&gt;&gt;
</pre>

<h4>Include parts of Preprocessor code:</h4>

<p>All included parts of preprocessor files placed in the folder "styles/blocks/*". Any number of preprocessor files can be placed here and in any order. They will be automatically included in the "styles/main.*" file and processed by the selected preprocessor.</p>

<h2>Included features</h2>

<ol>
	<li>Parcel</li>
	<li>Tailwind</li>
</ol>
