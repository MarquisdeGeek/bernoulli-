function calculateB(k){function h(b,a){return a?h(a,b%a):b}for(var c=[],a=[],e=0,b,d,f,g;e<=k;)for(c[b=d=e]=1,a[e]=++e;d;)f=c[--d]*a[b]-(c[b]*=g=a[d]),r=h(f*=b,g=a[b]*=g),c[d]=f/r,a[--b]=g/r;return [c[0],a[0]]};