namespace SmartLGU.Application.Residents.Commands.RegisterResident;

public class RegisterResidentCommandValidator : AbstractValidator<RegisterResidentCommand>
{
    public RegisterResidentCommandValidator()
    {
        RuleFor(v => v.FirstName)
            .NotEmpty()
            .MaximumLength(100);

        RuleFor(v => v.LastName)
            .NotEmpty()
            .MaximumLength(100);

        RuleFor(v => v.BirthDate)
            .NotEmpty();

        RuleFor(v => v.Gender)
            .NotEmpty()
            .MaximumLength(40);

        RuleFor(v => v.CivilStatus)
            .NotEmpty()
            .MaximumLength(40);

        RuleFor(v => v.Barangay)
            .NotEmpty()
            .MaximumLength(100);

        RuleFor(v => v.Address)
            .NotEmpty()
            .MaximumLength(250);

        RuleFor(v => v.ContactNumber)
            .MaximumLength(40);

        RuleFor(v => v.Email)
            .EmailAddress()
            .MaximumLength(150)
            .When(v => !string.IsNullOrWhiteSpace(v.Email));
    }
}
