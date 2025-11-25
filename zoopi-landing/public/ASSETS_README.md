# Assets Zoopi

Ce dossier contient les assets pour la landing page.

## Vidéos à ajouter

### Hero Section

- `hero_loop.mp4` - Vidéo de démonstration en boucle (2-6 secondes)
  - Format: MP4 H.264
  - Résolution: 720p
  - Codec: H.264
  - Taille cible: < 5MB
- `hero_loop.webm` - Fallback WebM
  - Format: WebM VP9
  - Résolution: 720p
- `poster.jpg` - Image de fallback si vidéo ne charge pas
  - Format: JPEG
  - Résolution: 720x1560px (9:19 ratio)

### Demo Section

- `demo_video.mp4` - Vidéo complète de démo
- `demo_video.webm` - Fallback WebM
- `demo_poster.jpg` - Poster de fallback

## Images à ajouter

- `og-image.jpg` - Image Open Graph pour partage social

  - Dimensions: 1200x630px
  - Format: JPEG
  - Taille: < 300KB

- `favicon.svg` - Icône du site
  - Format: SVG
  - Viewbox: 0 0 32 32

## Instructions pour traiter les vidéos

### Avec FFmpeg

```bash
# Convertir en MP4 optimisé pour web
ffmpeg -i input.mov -vcodec h264 -acodec aac -preset slow -crf 22 -vf scale=720:-2 hero_loop.mp4

# Convertir en WebM
ffmpeg -i input.mov -c:v libvpx-vp9 -crf 30 -b:v 0 -vf scale=720:-2 hero_loop.webm

# Extraire un poster frame
ffmpeg -i hero_loop.mp4 -ss 00:00:01 -vframes 1 poster.jpg
```

## Emplacements

Tous les assets doivent être placés dans `/public/` à la racine du projet.
