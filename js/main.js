let checklist = [];

$(document).ready(function() {
  $("#btn").click(function(e) {
    e.preventDefault();
    location.reload();
  });

  $("form").click(function(e) {
    e.preventDefault();
    let hovered_list = $("form").find(":hover");
    let hovered_id = hovered_list[1].getAttribute("id");
    check(hovered_id);
  });

  $("#checklist").click(function(e) {
    e.preventDefault();
    $("#checklist-div").toggle();
  });
});

addCheckList("1", "Teste 1", "Lorem ipsum dolor sit amet");
addCheckList("2", "Teste 2", "Lorem ipsum dolor sit amet");
addCheckList("3", "Teste 3", "Lorem ipsum dolor sit amet");

function addCheckList(number, title, desc) {
  // append do jQuery sendo usado para deixar o código mais limpo
  // e menos hardcoded
  checklist.push(number);
  let all_html = `
    <form action="" class="local-row">
            <label for="checkbox-${number}">
              <input
                type="checkbox"
                name="checkbox-${number}"
                id="${number}"
                class="filled-in checkbox white"
              />
              <span class="ck ${number}" id="${number}" style="margin-right: -20px;"></span>
            </label>
            <div class="text" style="margin-left: 20px;">
              <h6 id="${number}" class="${number}" style="font-size: 0.9em">${title}</h6>
              <p
                style="margin-top: -8px; font-size: 0.8em"
                class="grey-text darken-1 ${number}"
                id="${number}"
              >
              ${desc}
              </p>
            </div>
          </form>
          `;
  $("#checklist-div").append(all_html);
}

function check(id) {
  $this = $("#" + id);
  if (!$this.prop("checked")) {
    $this.attr("checked", "checked");
  } else {
    $this.removeAttr("checked");
  }
}
