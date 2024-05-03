.PHONY: workshop-assets.tgz
workshop-assets.tgz:
	tar -zcvf workshop-assets.tgz config.toml content data layouts LICENSE resources static themes .gitignore .gitmodules
