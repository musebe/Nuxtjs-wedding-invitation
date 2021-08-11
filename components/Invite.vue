<template>
  <cld-image
    public-id="nuxtjs-image-wedding-invitation/v722-aum-35a"
    crop="fill"
    alt="Wedding card"
    class="m-auto w-1/3"
  >
    <!-- Bride Name -->
    <cld-transformation
      :overlay="`text:Sacramento_600_normal:${names.bride},co_rgb:000000`"
      gravity="center"
      y="-1900"
    />

    <!-- And -->
    <cld-transformation
      overlay="text:Roboto_100_normal:AND,co_rgb:000000"
      gravity="center"
      y="-1300"
    />

    <!-- Husband Name -->
    <cld-transformation
      :overlay="`text:Sacramento_600_normal:${names.groom},co_rgb:000000`"
      gravity="center"
      y="-700"
    />

    <!-- Invitation Text -->
    <cld-transformation
      overlay="text:Roboto_100_normal:TOGETHER WITH THEIR FAMILIES,co_rgb:000000"
      gravity="center"
    />

    <cld-transformation
      overlay="text:Roboto_100_normal:INVITE YOU TO THEIR WEDDING CELEBRATION,co_rgb:000000"
      gravity="center"
      y="200"
    />

    <!-- Day -->
    <cld-transformation
      :overlay="`text:Roboto_100_normal:${date.day},co_rgb:000000`"
      y="800"
      x="-600"
    />

    <!-- Month -->
    <cld-transformation
      :overlay="`text:Roboto_100_normal:${date.month},co_rgb:000000`"
      gravity="center"
      y="500"
    />

    <!-- Date -->
    <cld-transformation
      :overlay="`text:Roboto_100_normal:${date.year},co_rgb:000000`"
      gravity="center"
      y="1100"
    />

    <!-- Year -->
    <cld-transformation
      :overlay="`text:Roboto_400_normal:${date.date},co_rgb:000000`"
      gravity="center"
      y="800"
    />

    <!-- Time -->
    <cld-transformation
      :overlay="`text:Roboto_100_normal:AT ${date.time},co_rgb:000000`"
      y="800"
      x="500"
    />

    <!-- Location  -->
    <cld-transformation
      :overlay="`text:Roboto_100_normal:${address.first},co_rgb:000000`"
      y="1500"
    />
    <cld-transformation
      :overlay="`text:Roboto_100_normal:${address.second},co_rgb:000000`"
      y="1700"
    />

    <!-- Reception  -->
    <cld-transformation
      overlay="text:Sacramento_200_normal:reception to follow,co_rgb:000000"
      y="2000"
    />
  </cld-image>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({
      names: "names",
      date: "date",
      address: "address",
    }),
  },
};
</script>
