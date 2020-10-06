const fs = require('fs');
const path = require('path');
const promisify = require('util').promisify;
const args = process.argv.slice(2);
const [source, destiny] = args;
const initialCompiler = /\/\*\sbegin:icons\s\*\//i;
const endCompiler = /\/\*\send:icons\s\*\//i;
const readFile = promisify(fs.readFile);

var icons = {};
promisify(fs.readdir)(source)
	.then(function (files) {
		var promises = files.map(function (file) {
			if (!/(.*)\.svg$/i.test(file)) {
				return Promise.resolve();
			}
			return readFile(path.resolve(source, file), { charset: 'utf8'})
				.then(function (data) {
					const className = file.replace(/^(.*)\.svg$/ig, 'tpr-$1');
					icons[className] = data.toString().replace(/(fill|stroke)="[0-9a-z#]*"/ig, '');
				});
		});
		return Promise.all(promises);
	})
	.then(function () {
		return readFile(destiny, { charset: 'utf8'});
		console.log(icons);
	})
	.then(function (buffer) {
		const dataScript = buffer.toString();
		var newScript = [], inComment = false;
		dataScript.split('\n').forEach(function (line) {
			if (inComment && endCompiler.test(line)) {
				inComment =  false;
				newScript.push(line.replace(endCompiler, '') + 'var icons = ' + JSON.stringify(icons));
			}
			if (inComment) {
				return;
			}
			if (initialCompiler.test(line)) {
				inComment =  true;
			}
			newScript.push(line);
		});
		return promisify(fs.writeFile)(destiny, newScript.join('\n'));
	})
	.then(function () {
		console.log('registro actualizado!');
	})
// fs.readdir(source, function (err, files) {
// 	if (err) {
// 		throw err;
// 	}
// 	files.forEach(function (file) {
// 		if (!/(.*)\.svg$/i.test(file)) {
// 			return;
// 		}
// 		fs.readFile(path.resolve(source, file), { charset: 'utf8'}, function (err, data) {
// 			if (err) {
// 				throw err;
// 			}
// 			const className = file.replace(/^(.*)\.svg$/ig, 'tpr-$1');
// 			icons[className] = data.toString();
// 		});
// 	});
// });