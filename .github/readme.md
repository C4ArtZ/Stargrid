# Stargrid ✨
## Jumpstart your browsing experience! 🚀
[Hero Image](hero.png)

---

## Features:
- Replaces every new tab
- Clock with current date
- Weather for one static location
- 12 quick-links you can customize

---

## How can I get this?
1. Download this repo.
2. rename "settings.js.example" to "settings.js".
3. Replace the placholders inside settings.js with your own information.
4. Add your own icons and wallpapers.
5. Open chrome://extensions/ with Google Chrome.
6. Add the folder of this repo as an unzipped extension.
7. Done!

---

## FAQ

### Can I add my own icons?
Sure! Just make sure they have a resolution of 48x48px and save them to Startgrid/icons/links/.
You can now edit your setting.js file to use the correct file.

### How do I change the background?
You can replace the files inside Startgrid/wallpaper/ with any image you like.
Just make sure to name them "day.png", "night.png", "sunrise.png" and "sunset.png".

### Can you add feature xyz?
Maybe. You can let me know by submitting a feature request via the "Issues" tab.

### I don't need 12 links. / I need more than 12!
At the moment there are always 12 links. I am working on a way to make this dynamic.
In the meantime you can just have less than 12 elements in your links / icons inside the settings.js file.
This might however lead to some strange behavior in the future.

### When does the wallpaper change?
07:00 - 10:59 : sunrise.png
11:00 - 16:59 : day.png
17:00 - 20:59 : sunset
21:00 - 06:59 : night.png
