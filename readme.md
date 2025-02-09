<h1>Parcel Tailwind</h1>
<p>Lightweight Parcel Template with Tailwind</p>

<p>
  <img src="https://raw.githubusercontent.com/agragregra/parcel-tailwind/master/src/img/parcel-tailwind.jpg" alt="Parcel HTML Template with Tailwind">
</p>

<p><strong>Parcel Tailwind</strong> - lightweight startup environment with <strong>Parcel</strong>, <strong>HTML imports</strong> (posthtml-include), <strong>npm run build</strong>, <strong>imagemin + webp</strong>.</p>

<h2>How to use Parcel Tailwind</h2>

<p>Clone into the current folder with remove all unnecessary (one command):</p>

<pre>git clone https://github.com/agragregra/pt .; rm -rf trunk .gitignore readme.md .git</pre>

<ol>
  <li>Clone or <a href="https://github.com/agragregra/pt/archive/master.zip">Download</a> <strong>Parcel Tailwind</strong> from GitHub</li>
  <li>Install Node Modules: <strong>npm i</strong></li>
  <li>Run: <strong>npm start</strong></li>
  <li>Build: <strong>npm run build</strong></li>
</ol>

<h2>Basic rules</h2>

<h4>src's & dist's:</h4>

<ol>
  <li>All <strong>src | dist scripts</strong> located in <strong>src/js/ | dist/js/</strong></li>
  <li>All <strong>src | dist styles</strong> located in <strong>src/css/ | dist/css/</strong></li>
  <li>All <strong>src | dist images</strong> located in <strong>src/img/ | dist/img/</strong></li>
</ol>

<h4>Include parts of HTML code:</h4>

<p>Include parts of html code is implemented using posthtml-include. You can import any part of code using construction in any of html files:</p>

<pre>&lt;include src="parts/component.html" locals='{
  "name": "Ivan Vasilievich",
  "img": "img/first.jpg"
}'&gt;&lt;/include&gt;</pre>

<p>In "src/parts/component.html":</p>

<pre>
Your Name: {{ name }}
Your Photo: &lt;img src="{{ img }}?as=webp"&gt;
</pre>

<h2>Included features</h2>

<ol>
  <li>Parcel</li>
  <li>Tailwind</li>
</ol>
