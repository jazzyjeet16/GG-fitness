
import React from "react";
import { useEffect } from "react";
import { useBanner } from "../../context/BannerContext";
function RefundPolicy() {
  const { setBannerTitle, setBreadcrumb, setBannerImage } = useBanner();
  useEffect(() => {
    setBannerTitle("Refund Policy");
    setBreadcrumb("Refund Policy");
    setBannerImage("/other-banner.png");
  }, []);
  return (
    <div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
        habitant morbi tristique senectus et netus et malesuada fames ac turpis
        egestas. Vivamus sagittis, sem vel tincidunt posuere, nisl turpis
        ultrices sapien, nec blandit nulla nisi in ex. Integer porttitor magna
        ac sem porta, vitae imperdiet turpis porta. Nulla facilisi. Aliquam erat
        volutpat. Vestibulum ante ipsum primis in faucibus orci luctus et
        ultrices posuere cubilia curae; Donec ac dui vehicula, dictum justo sit
        amet, varius erat. Sed nec justo nec lorem euismod congue. Aenean
        condimentum felis vel augue fermentum, nec luctus mauris tincidunt.Lorem
        ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant
        morbi tristique senectus et netus et malesuada fames ac turpis egestas.
        Vivamus sagittis, sem vel tincidunt posuere, nisl turpis ultrices
        sapien, nec blandit nulla nisi in ex. Integer porttitor magna ac sem
        porta, vitae imperdiet turpis porta. Nulla facilisi. Aliquam erat
        volutpat. Vestibulum ante ipsum primis in faucibus orci luctus et
        ultrices posuere cubilia curae; Donec ac dui vehicula, dictum justo sit
        amet, varius erat. Sed nec justo nec lorem euismod congue. Aenean
        condimentum felis vel augue fermentum, nec luctus mauris tincidunt.
      </p>
      <p>
        Donec eu nisl ac ante volutpat laoreet. Etiam viverra erat a libero
        posuere, at rhoncus sapien ultricies. Proin pulvinar, neque at tristique
        rutrum, nulla nunc iaculis nisl, sit amet congue nulla mi nec massa. Sed
        dapibus, tellus in facilisis elementum, leo felis volutpat nulla, a
        dictum diam libero vitae nunc. Aenean in fermentum ligula. Suspendisse
        bibendum malesuada magna, in placerat diam fringilla in. Praesent non
        orci sem. Curabitur sollicitudin, massa ac sodales vestibulum, enim
        magna lobortis mi, ut fermentum orci libero sed lectus.
      </p>
      <p>
        Vestibulum convallis, turpis ut hendrerit dapibus, leo turpis facilisis
        risus, sed tempor sem ipsum a justo. Morbi tristique luctus mauris, nec
        eleifend nibh fermentum et. Vivamus sodales, tortor nec porta
        consectetur, sapien nulla gravida tortor, a rhoncus elit sem ut ligula.
        Etiam a dignissim odio, ac fermentum metus. Curabitur gravida vehicula
        ligula, in varius lorem blandit eget. Sed sodales tincidunt suscipit.
        Quisque condimentum a metus sed cursus. Vestibulum convallis, turpis ut
        hendrerit dapibus, leo turpis facilisis risus, sed tempor sem ipsum a
        justo. Morbi tristique luctus mauris, nec eleifend nibh fermentum et.
        Vivamus sodales, tortor nec porta consectetur, sapien nulla gravida
        tortor, a rhoncus elit sem ut ligula. Etiam a dignissim odio, ac
        fermentum metus. Curabitur gravida vehicula ligula, in varius lorem
        blandit eget. Sed sodales tincidunt suscipit. Quisque condimentum a
        metus sed cursus.
      </p>
      <p>
        Suspendisse eget quam nec risus sagittis facilisis. Aenean porttitor
        nisl sed velit congue, vitae porttitor risus dapibus. Vivamus consequat
        lectus vitae lorem finibus, nec tempor tortor posuere. Maecenas nec
        viverra mi. Nulla facilisi. Curabitur vestibulum elit vel dolor posuere,
        vitae porttitor sapien varius. Mauris semper viverra magna, ac aliquam
        augue posuere ut. Nulla suscipit mi non mi congue volutpat. In hac
        habitasse platea dictumst. Proin pulvinar dapibus arcu, vel commodo diam
        porta nec. Sed vehicula luctus leo, vel tincidunt nisi posuere non. Ut
        dictum scelerisque tellus. Sed eleifend volutpat augue ac euismod. Nulla
        ultrices felis nec neque pretium, vitae dignissim augue malesuada.
        Integer vehicula bibendum velit. Curabitur in justo elit. Proin non
        ipsum in sem sagittis suscipit. Sed a tortor sit amet magna rhoncus
        tincidunt. Vivamus tincidunt orci non metus feugiat, ac varius diam
        consequat. Pellentesque a libero vel metus imperdiet cursus. Nunc
        vulputate tempor ex, nec viverra erat sagittis nec.
      </p>
    </div>
  );
}

export default RefundPolicy;
