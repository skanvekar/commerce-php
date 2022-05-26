"use strict";(self.webpackChunkcommerce_php=self.webpackChunkcommerce_php||[]).push([[3222],{73687:function(e,n,t){t.r(n),t.d(n,{_frontmatter:function(){return d},default:function(){return h}});var a,o=t(87462),r=t(63366),i=(t(15007),t(64983)),c=t(91515),l=t(25532),s=["components"],d={},p=(a="InlineAlert",function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.mdx)("div",e)}),m={_frontmatter:d},u=c.Z;function h(e){var n=e.components,t=(0,r.Z)(e,s);return(0,i.mdx)(u,(0,o.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,i.mdx)("h1",{id:"public-content"},"Public content"),(0,i.mdx)("p",null,"By default, all pages in Adobe Commerce and Magento Open Source are cacheable, but you can disable caching if necessary (e.g., payment method return page, debug page, or AJAX data source)."),(0,i.mdx)("h2",{id:"caching"},"Caching"),(0,i.mdx)("p",null,"If you need to refresh data every second consider using a cache.\nRequesting content from the cache is faster than generating it for every request."),(0,i.mdx)("p",null,"Only ",(0,i.mdx)("inlineCode",{parentName:"p"},"GET")," and ",(0,i.mdx)("inlineCode",{parentName:"p"},"HEAD")," methods are cacheable."),(0,i.mdx)("h3",{id:"disable-or-enable-caching"},"Disable or enable caching"),(0,i.mdx)("p",null,"Add a ",(0,i.mdx)("inlineCode",{parentName:"p"},'cacheable="false"')," attribute to any block in your layout to disable caching:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-xml"},'<block class="Magento\\Paypal\\Block\\Payflow\\Link\\Iframe" template="payflowlink/redirect.phtml" cacheable="false"/>\n')),(0,i.mdx)("p",null,"The application disables page caching if at least one non-cacheable block is present in the layout."),(0,i.mdx)(p,{variant:"warning",slots:"text",mdxType:"InlineAlert"}),(0,i.mdx)("p",null,"Using ",(0,i.mdx)("inlineCode",{parentName:"p"},'cacheable="false"')," inside the ",(0,i.mdx)("inlineCode",{parentName:"p"},"default.xml")," file disables caching for all pages on the site."),(0,i.mdx)("p",null,"You can also disable caching with HTTP headers.\nUse a controller to return an object that contains methods for manipulating the cache."),(0,i.mdx)("h3",{id:"define-caching-behavior"},"Define caching behavior"),(0,i.mdx)("p",null,"You can use the Admin to define caching policies or you can define them programmatically in a controller:"),(0,i.mdx)("blockquote",null,(0,i.mdx)("p",{parentName:"blockquote"},"Example")),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-php"},"<?php\n/**\n * Copyright © Magento, Inc. All rights reserved.\n * See COPYING.txt for license details.\n */\n\nuse Magento\\Framework\\App\\Action\\Action;\nuse Magento\\Framework\\App\\Action\\Context;\nuse Magento\\Framework\\View\\Result\\PageFactory;\n\nclass DynamicController extends Action\n{\n    protected $pageFactory;\n\n    public function __construct(\n        Context $context,\n        PageFactory $resultPageFactory\n    ) {\n        parent::__construct($context);\n        $this->pageFactory = $resultPageFactory;\n    }\n\n    /**\n     * This action render random number for each request\n     */\n    public function execute()\n    {\n        $page = $this->pageFactory->create();\n        //We are using HTTP headers to control various page caches (varnish, fastly, built-in php cache)\n        $page->setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, max-age=0', true);\n\n        return $page;\n    }\n}\n")),(0,i.mdx)("h2",{id:"configure-page-variations"},"Configure page variations"),(0,i.mdx)("p",null,"Most caching servers and proxies use a ",(0,i.mdx)("a",{parentName:"p",href:"https://glossary.magento.com/url"},"URL")," as a key for cache records. However, Adobe Commerce and Magento Open Source URLs are not unique ",(0,i.mdx)("em",{parentName:"p"},"enough")," to allow caching by URL only. Cookie and session data in the URL can also lead to undesirable side effects,  including:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"Collisions in cache storage"),(0,i.mdx)("li",{parentName:"ul"},"Unwanted information leaks (e.g., French language website partially visible on an English language website, prices for customer group visible in public, etc.)")),(0,i.mdx)("p",null,"To make each cached URL totally unique, we use ",(0,i.mdx)("em",{parentName:"p"},"HTTP context variables"),". Context variables enable the application to serve different content on the same URL based on:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"Customer group"),(0,i.mdx)("li",{parentName:"ul"},"Selected language"),(0,i.mdx)("li",{parentName:"ul"},"Selected store"),(0,i.mdx)("li",{parentName:"ul"},"Selected currency"),(0,i.mdx)("li",{parentName:"ul"},"Whether a customer is logged in or not")),(0,i.mdx)("p",null,"Context variables should not be specific to individual users because variables are used in cache keys for public content. In other words, a context variable per user results in a separate copy of content cached on the server for each user."),(0,i.mdx)("p",null,"The application generates a hash based on all context variables (",(0,i.mdx)("inlineCode",{parentName:"p"},"\\Magento\\Framework\\App\\Http\\Context::getVaryString"),"). The hash and current URL are used as keys for cache storage."),(0,i.mdx)("p",null,"For example, let's declare a context variable that shows a drinks catalog and advertisement to adult customers only. The following code snippet will create a copy of every page in Adobe Commerce and Magento Open Source for users under the age of 18."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-php"},"<?php\n/**\n * Copyright © Magento, Inc. All rights reserved.\n * See COPYING.txt for license details.\n */\n\nuse Magento\\Customer\\Model\\Session;\nuse Magento\\Framework\\App\\Http\\Context;\n\n/**\n * Plugin on \\Magento\\Framework\\App\\Http\\Context\n */\nclass CustomerAgeContextPlugin\n{\n    public function __construct(\n        Session $customerSession\n    ) {\n        $this->customerSession = $customerSession;\n    }\n    /**\n     * \\Magento\\Framework\\App\\Http\\Context::getVaryString is used to retrieve unique identifier for selected context,\n     * so this is a best place to declare custom context variables\n     */\n    public function beforeGetVaryString(Context $subject)\n    {\n        $age = $this->customerSession->getCustomerData()->getCustomAttribute('age');\n        $defaultAgeContext = 0;\n        $ageContext = $age >= 18 ? 1 : $defaultAgeContext;\n        $subject->setValue('CONTEXT_AGE', $ageContext, $defaultAgeContext);\n    }\n}\n")),(0,i.mdx)("p",null,"The ",(0,i.mdx)("inlineCode",{parentName:"p"},"subject->setValue")," argument specifies the value for newcomer context and is used to guarantee parity during cache key generation for newcomers and users who already received the ",(0,i.mdx)("inlineCode",{parentName:"p"},"X-Magento-Vary")," cookie."),(0,i.mdx)("p",null,"For another example of a context class, see ",(0,i.mdx)("a",{parentName:"p",href:"https://github.com/magento/magento2/blob/2.4/lib/internal/Magento/Framework/App/Http/Context.php"},"Magento/Framework/App/Http/Context"),"."),(0,i.mdx)("h3",{id:"x-magento-vary-cookie"},(0,i.mdx)("inlineCode",{parentName:"h3"},"X-Magento-Vary")," cookie"),(0,i.mdx)("p",null,"Use the ",(0,i.mdx)("inlineCode",{parentName:"p"},"X-Magento-Vary")," cookie to transfer context on the HTTP layer. HTTP proxies can be configured to calculate a unique identifier for cache based on the cookie and URL. For example, ",(0,i.mdx)("a",{parentName:"p",href:"https://github.com/magento/magento2/blob/2.4/app/code/Magento/PageCache/etc/varnish4.vcl#L63-L68"},"our sample Varnish 4 configuration")," uses the following:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-conf"},'sub vcl_hash {\n    if (req.http.cookie ~ "X-Magento-Vary=") {\n        hash_data(regsub(req.http.cookie, "^.*?X-Magento-Vary=([^;]+);*.*$", "\\1"));\n    }\n    ... more ...\n}\n')),(0,i.mdx)("h2",{id:"invalidate-public-content"},"Invalidate public content"),(0,i.mdx)("p",null,"You can clear cached content immediately after a entity changes. The application uses ",(0,i.mdx)("inlineCode",{parentName:"p"},"IdentityInterface")," to link entities in the application with cached content and to know what cache to clear when an ",(0,i.mdx)("a",{parentName:"p",href:"https://glossary.magento.com/entity"},"entity")," changes."),(0,i.mdx)("p",null,"This section shows you how to tell the application what cache to clear when you change an entity."),(0,i.mdx)("p",null,"First, your entity ",(0,i.mdx)("a",{parentName:"p",href:"https://glossary.magento.com/module"},"module")," must implement ",(0,i.mdx)("a",{parentName:"p",href:"https://github.com/magento/magento2/blob/2.4/lib/internal/Magento/Framework/DataObject/IdentityInterface.php"},(0,i.mdx)("inlineCode",{parentName:"a"},"Magento/Framework/DataObject/IdentityInterface"))," as follows:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-php"},"<?php\n/**\n * Copyright © Magento, Inc. All rights reserved.\n * See COPYING.txt for license details.\n */\n\nuse Magento\\Framework\\DataObject\\IdentityInterface;\n\nclass Product implements IdentityInterface\n{\n     /**\n      * Product cache tag\n      */\n     const CACHE_TAG = 'catalog_product';\n    /**\n     * Get identities\n     *\n     * @return array\n     */\n    public function getIdentities()\n    {\n         return [self::CACHE_TAG . '_' . $this->getId()];\n    }\n}\n")),(0,i.mdx)("p",null,"Second, the block object must also implement ",(0,i.mdx)("inlineCode",{parentName:"p"},"Magento/Framework/DataObject/IdentityInterface")," as follows:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-php"},"<?php\n/**\n * Copyright © Magento, Inc. All rights reserved.\n * See COPYING.txt for license details.\n */\n\nuse Magento\\Framework\\DataObject\\IdentityInterface;\n\nclass View extends AbstractProduct implements IdentityInterface\n{\n    /**\n     * Return identifiers for produced content\n     *\n     * @return array\n     */\n    public function getIdentities()\n    {\n        return $this->getProduct()->getIdentities();\n    }\n}\n")),(0,i.mdx)("p",null,"Adobe Commerce and Magento Open Source use cache tags for link creation. The performance of cache storage has a direct dependency on the number of tags per cache record, so try to minimize the number of tags and use them only for entities that are used in production mode. In other words, don't use invalidation for actions related to store setup."),(0,i.mdx)(p,{variant:"warning",slots:"text",mdxType:"InlineAlert"}),(0,i.mdx)("p",null,"Use only HTTP POST or PUT methods to change state (e.g., adding to a shopping cart, adding to a wishlist, etc.) and don't expect to see caching on these methods. Using GET or HEAD methods might trigger caching and prevent updates to private content. For more information about caching, see ",(0,i.mdx)("a",{parentName:"p",href:"https://www.w3.org/Protocols/rfc2616/rfc2616-sec13.html"},"RFC-2616 section 13")),(0,i.mdx)(l.default,{mdxType:"Docs"}))}h.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-developer-cache-page-public-content-md-06c9112d42c3f9e7a552.js.map