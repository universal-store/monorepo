CREATE TABLE public."Store" (
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    name text NOT NULL,
    address text NOT NULL,
    "googlePlacesId" text NOT NULL,
    category text,
    "storePicId" uuid
);
CREATE TABLE public."StoreItem" (
    "barcodeId" text NOT NULL,
    quantity text NOT NULL,
    price money NOT NULL,
    "shortName" text,
    "longName" text NOT NULL,
    description text,
    purchased boolean DEFAULT false NOT NULL,
    "itemImageId" uuid,
    "storeId" uuid NOT NULL
);
CREATE TABLE public."StoreItemPic" (
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    size64 text NOT NULL,
    size128 text NOT NULL,
    size256 text NOT NULL
);
CREATE TABLE public."StorePic" (
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    size64 text NOT NULL,
    size128 text NOT NULL,
    size256 text NOT NULL
);
CREATE TABLE public."User" (
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    "firstName" name NOT NULL,
    "lastName" name,
    "sessionId" uuid DEFAULT public.gen_random_uuid() NOT NULL,
    email text NOT NULL,
    password text NOT NULL,
    "profilePicId" uuid
);
CREATE TABLE public."UserCartItem" (
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    "userId" uuid NOT NULL,
    "itemBarcodeId" text NOT NULL
);
CREATE TABLE public."UserFavoriteItem" (
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    "userId" uuid NOT NULL,
    "itemBarcodeId" text NOT NULL,
    "itemStoreId" uuid NOT NULL
);
CREATE TABLE public."UserFavoriteStore" (
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    "userId" uuid NOT NULL,
    "storeId" uuid NOT NULL
);
CREATE TABLE public."UserProfilePic" (
    id uuid NOT NULL,
    size64 text,
    size128 text,
    size256 text
);
ALTER TABLE ONLY public."StoreItemPic"
    ADD CONSTRAINT "StoreItemPic_pkey" PRIMARY KEY (id);
ALTER TABLE ONLY public."StoreItem"
    ADD CONSTRAINT "StoreItem_barcodeId_key" UNIQUE ("barcodeId");
ALTER TABLE ONLY public."StoreItem"
    ADD CONSTRAINT "StoreItem_itemImageId_key" UNIQUE ("itemImageId");
ALTER TABLE ONLY public."StoreItem"
    ADD CONSTRAINT "StoreItem_pkey" PRIMARY KEY ("barcodeId");
ALTER TABLE ONLY public."StorePic"
    ADD CONSTRAINT "StorePic_pkey" PRIMARY KEY (id);
ALTER TABLE ONLY public."Store"
    ADD CONSTRAINT "Store_pkey" PRIMARY KEY (id);
ALTER TABLE ONLY public."Store"
    ADD CONSTRAINT "Store_storePicId_key" UNIQUE ("storePicId");
ALTER TABLE ONLY public."UserCartItem"
    ADD CONSTRAINT "UserCartItem_pkey" PRIMARY KEY (id);
ALTER TABLE ONLY public."UserFavoriteItem"
    ADD CONSTRAINT "UserFavoriteItem_pkey" PRIMARY KEY (id);
ALTER TABLE ONLY public."UserFavoriteStore"
    ADD CONSTRAINT "UserFavoriteStore_pkey" PRIMARY KEY (id);
ALTER TABLE ONLY public."UserProfilePic"
    ADD CONSTRAINT "UserProfilePic_pkey" PRIMARY KEY (id);
ALTER TABLE ONLY public."User"
    ADD CONSTRAINT "User_email_key" UNIQUE (email);
ALTER TABLE ONLY public."User"
    ADD CONSTRAINT "User_pkey" PRIMARY KEY (id);
ALTER TABLE ONLY public."User"
    ADD CONSTRAINT "User_profilePicId_key" UNIQUE ("profilePicId");
ALTER TABLE ONLY public."User"
    ADD CONSTRAINT "User_sessionId_key" UNIQUE ("sessionId");
ALTER TABLE ONLY public."StoreItem"
    ADD CONSTRAINT "StoreItem_itemImageId_fkey" FOREIGN KEY ("itemImageId") REFERENCES public."StoreItemPic"(id) ON UPDATE RESTRICT ON DELETE RESTRICT;
ALTER TABLE ONLY public."StoreItem"
    ADD CONSTRAINT "StoreItem_storeId_fkey" FOREIGN KEY ("storeId") REFERENCES public."Store"(id) ON UPDATE RESTRICT ON DELETE RESTRICT;
ALTER TABLE ONLY public."Store"
    ADD CONSTRAINT "Store_storePicId_fkey" FOREIGN KEY ("storePicId") REFERENCES public."StorePic"(id) ON UPDATE RESTRICT ON DELETE RESTRICT;
ALTER TABLE ONLY public."UserCartItem"
    ADD CONSTRAINT "UserCartItem_itemBarcodeId_fkey" FOREIGN KEY ("itemBarcodeId") REFERENCES public."StoreItem"("barcodeId") ON UPDATE RESTRICT ON DELETE RESTRICT;
ALTER TABLE ONLY public."UserCartItem"
    ADD CONSTRAINT "UserCartItem_userId_fkey" FOREIGN KEY ("userId") REFERENCES public."User"(id) ON UPDATE RESTRICT ON DELETE RESTRICT;
ALTER TABLE ONLY public."UserFavoriteItem"
    ADD CONSTRAINT "UserFavoriteItem_itemBarcodeId_fkey" FOREIGN KEY ("itemBarcodeId") REFERENCES public."StoreItem"("barcodeId") ON UPDATE RESTRICT ON DELETE RESTRICT;
ALTER TABLE ONLY public."UserFavoriteItem"
    ADD CONSTRAINT "UserFavoriteItem_itemStoreId_fkey" FOREIGN KEY ("itemStoreId") REFERENCES public."Store"(id) ON UPDATE RESTRICT ON DELETE RESTRICT;
ALTER TABLE ONLY public."UserFavoriteItem"
    ADD CONSTRAINT "UserFavoriteItem_userId_fkey" FOREIGN KEY ("userId") REFERENCES public."User"(id) ON UPDATE RESTRICT ON DELETE RESTRICT;
ALTER TABLE ONLY public."UserFavoriteStore"
    ADD CONSTRAINT "UserFavoriteStore_storeId_fkey" FOREIGN KEY ("storeId") REFERENCES public."Store"(id) ON UPDATE RESTRICT ON DELETE RESTRICT;
ALTER TABLE ONLY public."UserFavoriteStore"
    ADD CONSTRAINT "UserFavoriteStore_userId_fkey" FOREIGN KEY ("userId") REFERENCES public."User"(id) ON UPDATE RESTRICT ON DELETE RESTRICT;
ALTER TABLE ONLY public."User"
    ADD CONSTRAINT "User_profilePicId_fkey" FOREIGN KEY ("profilePicId") REFERENCES public."UserProfilePic"(id) ON UPDATE RESTRICT ON DELETE RESTRICT;
