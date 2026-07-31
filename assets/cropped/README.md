# Cropped assets for social platforms

根据需要裁剪到:
- `x-1600x900.png` — X/Twitter
- `v2ex-1200x630.png` — V2EX
- `juejin-900x500.png` — 掘金
- `zhihu-1200x675.png` — 知乎
- `xhs-1080x1440.png` — 小红书
- `ph-1920x1080.png` — ProductHunt 封面

源图: `../kimi-k3-hero.png` (2880×6000)
用 sips 命令批量生成:

```bash
sips -z 900 1600 -c 900 1600 ../kimi-k3-hero.png --out x-1600x900.png
sips -z 630 1200 -c 630 1200 ../kimi-k3-hero.png --out v2ex-1200x630.png
sips -z 500 900 -c 500 900 ../kimi-k3-hero.png --out juejin-900x500.png
sips -z 675 1200 -c 675 1200 ../kimi-k3-hero.png --out zhihu-1200x675.png
sips -z 1440 1080 -c 1440 1080 ../kimi-k3-hero.png --out xhs-1080x1440.png
sips -z 1080 1920 -c 1080 1920 ../kimi-k3-hero.png --out ph-1920x1080.png
```
