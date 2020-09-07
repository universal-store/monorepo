CREATE TABLE public."StoreItem" (
    "barcodeId" bigint NOT NULL,
    quantity text NOT NULL,
    price money NOT NULL,
    "shortName" text,
    "longName" text NOT NULL,
    description text,
    purchased boolean DEFAULT false NOT NULL,
    "itemImageId" uuid
);
CREATE TABLE public."StoreItemPic" (
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    size64 text NOT NULL,
    size128 text NOT NULL,
    size256 text NOT NULL,
    size512 text NOT NULL
);
CREATE TABLE public."User" (
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    "firstName" name NOT NULL,
    "lastName" name,
    "sessionId" uuid DEFAULT public.gen_random_uuid() NOT NULL,
    email text NOT NULL,
    password text NOT NULL,
    "profilePicId" uuid,
    "favoriteItems" uuid,
    "favoriteStores" uuid,
    "shoppingCart" uuid
);
CREATE TABLE public."UserProfilePic" (
    id uuid NOT NULL,
    size64 text NOT NULL,
    size128 text NOT NULL,
    size256 text NOT NULL,
    size512 text NOT NULL
);
ALTER TABLE ONLY public."StoreItemPic"
    ADD CONSTRAINT "StoreItemPic_pkey" PRIMARY KEY (id);
ALTER TABLE ONLY public."StoreItem"
    ADD CONSTRAINT "StoreItem_barcodeId_key" UNIQUE ("barcodeId");
ALTER TABLE ONLY public."StoreItem"
    ADD CONSTRAINT "StoreItem_itemImageId_key" UNIQUE ("itemImageId");
ALTER TABLE ONLY public."StoreItem"
    ADD CONSTRAINT "StoreItem_pkey" PRIMARY KEY ("barcodeId");
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
ALTER TABLE ONLY public."User"
    ADD CONSTRAINT "User_profilePicId_fkey" FOREIGN KEY ("profilePicId") REFERENCES public."UserProfilePic"(id) ON UPDATE RESTRICT ON DELETE RESTRICT;
