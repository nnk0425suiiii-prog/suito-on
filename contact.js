const CONTACT_API =
  "https://suito-on-api.nnk0425suiiii.workers.dev/contact";


const contactForm =
  document.getElementById("contactForm");

const contactSubmit =
  document.getElementById("contactSubmit");

const contactStatus =
  document.getElementById("contactStatus");


if (contactForm) {

  contactForm.addEventListener(
    "submit",
    async event => {

      event.preventDefault();


      const website =
        document
          .getElementById("contactWebsite")
          ?.value
          .trim();


      if (website) {
        return;
      }


      const privacy =
        document.getElementById(
          "contactPrivacy"
        );


      if (!privacy?.checked) {

        showContactStatus(
          "プライバシーポリシーへの同意をお願いします。",
          "error"
        );

        return;
      }


      const formData =
        new FormData(contactForm);


      const data = {

        name:
          String(
            formData.get("name") || ""
          ).trim(),

        email:
          String(
            formData.get("email") || ""
          ).trim(),

        subject:
          String(
            formData.get("subject") || ""
          ).trim(),

        message:
          String(
            formData.get("message") || ""
          ).trim(),

        website:
          String(
            formData.get("website") || ""
          ).trim()

      };


      if (
        !data.name ||
        !data.email ||
        !data.subject ||
        !data.message
      ) {

        showContactStatus(
          "入力されていない項目があります。",
          "error"
        );

        return;
      }


      contactSubmit.disabled = true;


      showContactStatus(
        "送信しています…"
      );


      try {

        const response =
          await fetch(
            CONTACT_API,
            {

              method: "POST",

              headers: {
                "Content-Type":
                  "application/json"
              },

              body:
                JSON.stringify(data)

            }
          );


        const result =
          await response.json();


        if (
          !response.ok ||
          !result.success
        ) {

          throw new Error(
            result.error ||
            "send_failed"
          );

        }


        contactForm.reset();


        showContactStatus(
          "送信しました。お問い合わせありがとうございます！",
          "success"
        );

      }

      catch (error) {

        console.error(
          "CONTACT ERROR:",
          error
        );


        showContactStatus(
          "送信できませんでした。時間をおいてもう一度お試しください。",
          "error"
        );

      }

      finally {

        contactSubmit.disabled =
          false;

      }

    }
  );

}


function showContactStatus(
  message,
  type = ""
) {

  if (!contactStatus) {
    return;
  }


  contactStatus.textContent =
    message;


  contactStatus.classList.remove(
    "is-success",
    "is-error"
  );


  if (type === "success") {

    contactStatus.classList.add(
      "is-success"
    );

  }


  if (type === "error") {

    contactStatus.classList.add(
      "is-error"
    );

  }

}