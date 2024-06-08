"use client";
export default function Info() {
  return (
    <div
      className="grid gap-y-5"
      id="parent"
      onClick={(e) => {
        const elem = e.target as HTMLElement;
        if (elem.tagName == "P" || elem.tagName == "I") {
          elem.parentElement?.parentElement?.lastElementChild?.classList.toggle(
            "hidden"
          );
          if (!elem.classList.contains("descriptionText")) {
            elem.parentElement?.lastElementChild?.classList.toggle("rotate");
          }
        }
      }}
    >
      <div className="grid gap-y-2">
        <div className="flex justify-between">
          <p className="font-semibold  text-black">
            Integer morbi semper sodales sit facilisi habitant pulvinar sed
            venenatis?
          </p>
          <i className="bi-plus-lg text-2xl mb-auto text-black"></i>
        </div>
        <p className="text-sm text-black hidden descriptionText">
          Magnis congue neque sociis ut nisl. Quis dui lobortis lectus viverra.
        </p>
      </div>
      <div className="grid gap-y-2">
        <div className="flex justify-between">
          <p className="font-semibold h-12 overflow-hidden">
            Massa massa nulla rhoncus a quam consectetur sed purus, enim?
          </p>
          <i className="bi-plus-lg text-2xl mb-auto"></i>
        </div>
        <p className="text-sm text-black hidden descriptionText">
        Nunc molestie sit in sed sodales. Bibendum pharetra, id viverra suspendisse pharetra ac aenean neque. Sodales ornare penatibus eros consectetur potenti in feugiat purus. Posuere amet, sodales nibh eget. A et, a ante pretium praesent elementum feugiat pharetra congue.
        </p>
      </div>
      <div className="grid gap-y-2">
        <div className="flex justify-between">
          <p className="font-semibold h-12 overflow-hidden">
            Dignissim congue rutrum pretium nunc sed nibh vitae tortor ut?
          </p>
          <i className="bi-plus-lg text-2xl mb-auto"></i>
        </div>
        <p className="text-sm text-black hidden descriptionText">
          Magnis congue neque sociis ut nisl. Quis dui lobortis lectus viverra.
        </p>
      </div>
      <div className="grid gap-y-2">
        <div className="flex justify-between">
          <p className="font-semibold h-12 overflow-hidden">
            Vulputate imperdiet fusce vivamus nunc leo morbi scelerisque in?
          </p>
          <i className="bi-plus-lg text-2xl mb-auto"></i>
        </div>
        <p className="text-sm text-black hidden descriptionText">
          Magnis congue neque sociis ut nisl. Quis dui lobortis lectus viverra.
        </p>
      </div>
      <div className="grid gap-y-2">
        <div className="flex justify-between">
          <p className="font-semibold h-12 overflow-hidden">
            Sit rhoncus rhoncus malesuada massa adipiscing arcu, semper ut in?
          </p>
          <i className="bi-plus-lg text-2xl mb-auto"></i>
        </div>
        <p className="text-sm text-black hidden descriptionText">
          Magnis congue neque sociis ut nisl. Quis dui lobortis lectus viverra.
        </p>
      </div>
      <div className="grid gap-y-2">
        <div className="flex justify-between">
          <p className="font-semibold h-12 overflow-hidden">
            Vulputate nisl non neque iaculis lacus dui, habitant gravida?
          </p>
          <i className="bi-plus-lg text-2xl mb-auto"></i>
        </div>
        <p className="text-sm text-black hidden descriptionText">
          Magnis congue neque sociis ut nisl. Quis dui lobortis lectus viverra.
        </p>
      </div>
      <div className="grid gap-y-2">
        <div className="flex justify-between">
          <p className="font-semibold h-12 overflow-hidden">
            Est felis a velit at vitae venenatis rhoncus?
          </p>
          <i className="bi-plus-lg text-2xl mb-auto"></i>
        </div>
        <p className="text-sm text-black hidden descriptionText">
          Magnis congue neque sociis ut nisl. Quis dui lobortis lectus viverra.
        </p>
      </div>
      <div className="grid gap-y-2">
        <div className="flex justify-between">
          <p className="font-semibold h-12 overflow-hidden">
            Eget nam accumsan elementum accumsan imperdiet eu, cras?
          </p>
          <i className="bi-plus-lg text-2xl mb-auto"></i>
        </div>
        <p className="text-sm text-black hidden descriptionText">
          Magnis congue neque sociis ut nisl. Quis dui lobortis lectus viverra.
        </p>
      </div>
      <div className="grid gap-y-2">
        <div className="flex justify-between">
          <p className="font-semibold h-12 overflow-hidden">
            Fermentum et semper aliquet justo, facilisis?
          </p>
          <i className="bi-plus-lg text-2xl mb-auto"></i>
        </div>
        <p className="text-sm text-black hidden descriptionText">
          Magnis congue neque sociis ut nisl. Quis dui lobortis lectus viverra.
        </p>
      </div>
      <div className="grid gap-y-2">
        <div className="flex justify-between">
          <p className="font-semibold h-12 overflow-hidden">
            A vulputate est diam tempus condimentum in?
          </p>
          <i className="bi-plus-lg text-2xl mb-auto"></i>
        </div>
        <p className="text-sm text-black hidden descriptionText">
          Magnis congue neque sociis ut nisl. Quis dui lobortis lectus viverra.
        </p>
      </div>
    </div>
  );
}
