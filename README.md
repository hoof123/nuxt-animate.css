# nuxt animate.css

this nuxt module is an integration of css animation library [animate.css](https://animate.style/) paired with [javascript's intersection observer api](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API) to optionally trigger animations on scroll.

credit for animate.css goes to Daniel Eden, Elton Mesquita, and Waren Gonzaga. animate.css is licensed under the [hippocratic license](https://firstdonoharm.dev/).

### features

- 🚀 nuxt 3 support
- open source
- full typescript support
- ✨ auto import modules & styles
- ✨ works out of the box

---

## installation

to add this module to your Nuxt.js project, run the following command:

`npm i @jpcreativemedia/nuxt-animate.css`

then, add nuxt-swipe to the modules section of your nuxt.config.js file:

```
  export default {
    modules: [
        '@jpcreativemedia/nuxt-animate.css'
    ]
  }
```

## usage

### basic usage

to use the module, simply add <Animate> component in your vue file. wrap the component tags around any children that you wish to animate.

for example:

```
<template>
    <Animate>
        <p>Hello World!</p>
    </Animate>
</template>
```

the component requires **5** props: **animation**, **delay**, **duration**, **repeat**, **:scroll**. you can leave the prop values empty, but they must be present to adhere with typescript.

**animation** corresponds with animate.css' basic animation classes and is where you choose what [animation](#animations) you wish to use.

```
<template>
    <Animate animation="animate__bounce">
        <p>Hello World!</p>
    </Animate>
</template>
```

**delay**, **duration**, **repeat** are [utility classes](#utility-classes).

```
<template>
    <Animate animation="animate__bounce" delay="" duration="" repeat="">
        <p>Hello World!</p>
    </Animate>
</template>
```

**:scroll** is a boolean that enables the intersection observer api so you can choose to trigger the animation as the child element is scrolled into view.
<br>
note: **:scroll** must be assigned dynamically with the vue directive **v-bind:** or it's **:** shortcut.
<br>
example:

```
<template>
    <Animate v-bind:scroll="true">
        <p>Hello World!</p>
    </Animate>
</template>
```

or

```
<template>
    <Animate :scroll="true">
        <p>Hello World!</p>
    </Animate>
</template>
```

---

### animations

<br>

| **attention seekers**  |
| :------------- |
| animate__bounce  |
| animate__flash  |
| animate__pulse  |
| animate__rubberBand |
| animate__shakeX |
| animate__shakeY |
| animate__headShake |
| animate__swing |
| animate__tada |
| animate__wobble |
| animate__jello |
| animate__heartBeat |

<br>

| **back entrances**  | **back exits** |
| :------------- | :------------- |
| animate__backInDown  | animate__backOutDown |
| animate__backInLeft  | animate__backOutLeft |
| animate__backInRight  | animate__backOutRight |
| animate__backInUp  | animate__backOutUp |

<br>

| **bouncing entrances**  | **bouncing exits** |
| :------------- | :------------- |
| animate__bounceIn  | animate__bounceOut |
| animate__bounceInDown  | animate__bounceOutDown |
| animate__bounceInLeft  | animate__bounceOutLeft |
| animate__bounceInRight  | animate__bounceOutRight |
| animate__bounceInUp  | animate__bounceOutUp |

<br>

| **fading entrances**  | **fading exits** |
| :------------- | :------------- |
| animate__fadeIn  | animate__fadeOut |
| animate__fadeInDown  | animate__fadeOutDown |
| animate__fadeInDownBig  | animate__fadeOutDownBig |
| animate__fadeInLeft  | animate__fadeOutLeft |
| animate__fadeInLeftBig  | animate__fadeOutLeftBig |
| animate__fadeInRight  | animate__fadeOutRight |
| animate__fadeInRightBig  | animate__fadeOutRightBig |
| animate__fadeInUp  | animate__fadeOutUp |
| animate__fadeInUpBig  | animate__fadeOutBig |
| animate__fadeInTopLeft  | animate__fadeOutTopLeft |
| animate__fadeInTopRight  | animate__fadeOutTopRight |
| animate__fadeInBottomLeft  | animate__fadeOutBottomRight |
| animate__fadeInBottomRight  | animate__fadeOutBottomLeft |

<br>

| **flippers**  |
| :------------- |
| animate__flip  | 
| animate__flipInX  |
| animate__flipInY  |
| animate__flipOutX |
| animate__flipOutY |

<br>

| **lightspeed**  |
| :------------- |
| animate__lightSpeedInRight  | 
| animate__lightSpeedInLeft  |
| animate__lightSpeedOutRight  |
| animate__lightSpeedOutLeft |

<br>

| **rotating entrances**  | **rotating exits** |
| :------------- | :------------- |
| animate__rotateIn  | animate__rotateOut |
| animate__rotateInDown  | animate__rotateOutDown |
| animate__rotateInLeft  | animate__rotateOutLeft |
| animate__rotateInRight  | animate__rotateOutRight |
| animate__rotateInUp  | animate__rotateOutUp |

<br>

| **specials**  |
| :------------- |
| animate__hinge  | 
| animate__jackInTheBox  |
| animate__rollIn  |
| animate__rollOut |

<br>

| **zooming entrances**  | **zooming exits** |
| :------------- | :------------- |
| animate__zoomIn  | animate__zoomOut |
| animate__zoomInDown  | animate__zoomOutDown |
| animate__zoomInLeft  | animate__zoomOutLeft |
| animate__zoomInRight  | animate__zoomOutRight |
| animate__zoomInUp  | animate__zoomOutUp |

<br>

| **sliding entrances**  | **sliding exits** |
| :------------- | :------------- |
| animate__slideInDown  | animate__slideOutDown |
| animate__slideInLeft  | animate__slideOutLeft |
| animate__slideInRight  | animate__slideOutRight |
| animate__slideInUp  | animate__slideOutUp |

<br>

---

<br>

### utility classes

animate.css has a few utility classes to simplify its use.

#### delay classes

you can add delays with these **delay** prop values:

| class  | default delay time |
| :------------- | :------------- |
| animate__delay-2s  | 2s  |
| animate__delay-3s  | 3s  |
| animate__delay-4s  | 4s  |
| animate__delay-5s  | 5s  |

#### duration classes

you can control the speed of the animation with these **duration** prop values:

| class  | default speed time |
| :------------- | :------------- |
| animate__slow  | 2s  |
| animate__slower | 3s  |
| animate__fast  | 800ms |
| animate__faster  | 500ms  |

#### repeat classes

you can control the iteration count of the animation with these **repeat** prop values:

| class  | default iteration count |
| :------------- | :------------- |
| animate__repeat-1  | 1 |
| animate__repeat-2  | 2  |
| animate__repeat-3  | 3  |
| animate__infinite  | infinite  |

## examples

fadeIn animation with no delay, default duration, 1 iteration, no scroll.

```
<template>
    <Animate animation="animate__fadeIn" delay="" duration="" repeat="" :scroll="false">
        <p>Hello World!</p>
    </Animate>
</template>
```

bounce animation with no delay, fast duration, 3 iterations, triggered on scroll.

```
<template>
    <Animate animation="animate__bounce" delay="" duration="animate__fast" repeat="animate__repeat-3" :scroll="true">
        <p>Hello World!</p>
    </Animate>
</template>
```

slideOutRight animation with a 1 second delay, slow duration, 1 iteration, triggered on scroll.

```
<template>
    <Animate animation="animate__slideOutRight" delay="animate__delay-1s" duration="animate__slow" repeat="" :scroll="true">
        <p>Hello World!</p>
    </Animate>
</template>
```

zoomIn animation with a 2 second delay, faster duration, 1 iteration, triggered on scroll.

```
<template>
    <Animate animation="animate__zoomIn" delay="animate__delay-2s" duration="animate__faster" repeat="" :scroll="true">
        <p>Hello World!</p>
    </Animate>
</template>
```

## demo

coming soon

## best practices

for some advice on animation best practices, you should read the following:

[animate.css best practices](https://animate.style/#best-practices)

### accessibility
animate.css supports the prefers-reduced-motion media query so that users with motion sensitivity can opt out of animations. on supported platforms (currently all the major browsers and OS, including mobile), users can select "reduce motion" on their operating system preferences, and it will turn off CSS transitions for them without any further work required.

## roadmap

- global animation options
- custom animation support
- intersection observer api options

## development

for further development, clone this repository and:

- run `npm run dev:prepare` to generate type stubs.
- use `npm run dev` to start [playground](./playground) in development mode.

the nuxt module development guide can be found here: [Nuxt Module Author Guide](https://nuxt.com/docs/guide/going-further/modules)

## license

[MIT](https://choosealicense.com/licenses/mit/)