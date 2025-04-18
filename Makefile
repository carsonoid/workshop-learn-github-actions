.PHONY: workshop-assets
workshop-assets:
	tar -zcvf static/workshop-assets.tgz config.toml content data layouts LICENSE resources static themes .gitignore .gitmodules

.PHONY: install-hugo-codespace
install-hugo-codespace:
	curl -L https://github.com/gohugoio/hugo/releases/download/v0.154.0/hugo_extended_0.145.0_linux-amd64.tar.gz | tar -zxv hugo
