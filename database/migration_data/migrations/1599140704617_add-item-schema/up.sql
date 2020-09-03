CREATE TABLE public."StoreItem" (
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    "barcodeId" bigint NOT NULL,
    quantity text NOT NULL,
    price money NOT NULL,
    "shortName" text,
    "longName" text NOT NULL,
    description text,
    purchased boolean DEFAULT false NOT NULL
);
CREATE TABLE public."User" (
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    "firstName" text NOT NULL,
    "lastName" text,
    "sessionId" uuid DEFAULT public.gen_random_uuid() NOT NULL,
    email text NOT NULL,
    password text NOT NULL,
    "profilePicId" uuid
);
CREATE TABLE public."UserProfilePic" (
    id uuid NOT NULL,
    size64 text NOT NULL,
    size128 text NOT NULL,
    size256 text NOT NULL,
    size512 text NOT NULL,
    "userId" uuid NOT NULL
);
ALTER TABLE ONLY public."StoreItem"
    ADD CONSTRAINT "StoreItem_barcodeId_key" UNIQUE ("barcodeId");
ALTER TABLE ONLY public."StoreItem"
    ADD CONSTRAINT "StoreItem_pkey" PRIMARY KEY ("barcodeId");
ALTER TABLE ONLY public."UserProfilePic"
    ADD CONSTRAINT "UserProfilePic_pkey" PRIMARY KEY (id);
ALTER TABLE ONLY public."UserProfilePic"
    ADD CONSTRAINT "UserProfilePic_userId_key" UNIQUE ("userId");
ALTER TABLE ONLY public."User"
    ADD CONSTRAINT "User_email_key" UNIQUE (email);
ALTER TABLE ONLY public."User"
    ADD CONSTRAINT "User_pkey" PRIMARY KEY (id);
ALTER TABLE ONLY public."User"
    ADD CONSTRAINT "User_sessionId_key" UNIQUE ("sessionId");
ALTER TABLE ONLY public."UserProfilePic"
    ADD CONSTRAINT "UserProfilePic_userId_fkey" FOREIGN KEY ("userId") REFERENCES public."User"(id) ON UPDATE RESTRICT ON DELETE RESTRICT;
